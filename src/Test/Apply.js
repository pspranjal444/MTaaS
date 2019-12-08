import React, {Component} from 'react';
import Dashboard from './Dashboard';
import Axios from 'axios';
import cookie from 'react-cookies';

class Apply extends Component {
    constructor(){
        super();
        this.state = {
            projects: [],
            project_name: '',
            project_id: '',
            manager_name: '',
            manager_id: '',
            proj_desc: '',
            app_link: '',
            app_name: ''
        }
    }

    componentDidMount(){
        console.log(cookie.load('tester_id'))
        Axios.get('http://localhost:3001/getAllProjects').then(result=>{
            this.setState({
                projects: result.data
            })
        })
    }

    render(){
        let details = this.state.projects.map((entry)=>{
                return (
                        <tr key={entry.project_id}>
                            <td style={{textAlign: 'center'}}>{entry.project_name}</td>
                            <td style={{textAlign: 'center'}}>{entry.project_id}</td>
                            <td style={{textAlign: 'center'}}>{entry.manager_name}</td>
                            <td style={{textAlign: 'center'}}><button class="btn btn-primary" data-toggle="modal" data-target="#myModal" onClick={()=>{
                                    this.setState({
                                        project_name: entry.project_name,
                                        project_id: entry.project_id,
                                        manager_name: entry.manager_name,
                                        manager_id: entry.project_id,
                                        proj_desc: entry.proj_desc,
                                        app_link: entry.app_link,
                                        app_name: entry.app_name
                                    })
                                }}>View</button></td>
                            <td style={{textAlign: 'center'}}><button class="btn btn-success" onClick={()=>{
                                const project_id = entry.project_id;
                                const manager_id = entry.manager_id;
                                const project_name = entry.project_name;
                                const manager_name = entry.manager_name;
                                const app_link = entry.app_link;
                                const app_name = entry.app_name;
                                const proj_desc = entry.proj_desc;
                                const app_location = entry.app_location;
                                const tester_id = cookie.load('tester_id');
                                Axios.post('http://localhost:3001/apply', {project_id, manager_name, manager_id, project_name, app_link, app_name, proj_desc, app_location, tester_id}).then(result=>{
                                    alert('Applied Successfully');
                                })
                            }}>Apply</button></td>
                        </tr>
                    )
            })
        return(
            <div class="container">
                <Dashboard/>
                <div id="myModal" class="modal fade" role="dialog">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title">{this.state.project_name}</h4>
                            </div>
                            <div class="modal-body">
                                <p><b>Project ID: </b>{this.state.project_id}</p>
                                <p><b>Application: </b>{this.state.app_name}</p>
                                <p><b>Manager Name: </b>{this.state.manager_name}</p>
                                <p><b>Manager ID: </b>{this.state.manager_id}</p>
                                <p><b>Description: </b>{this.state.proj_desc}</p>
                                <p><b>Application Link: </b><a href="#">{this.state.app_link}</a></p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <h2>View Projects</h2>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th style={{textAlign: 'center'}}>Project Name</th>
                            <th style={{textAlign: 'center'}}>Project ID</th>
                            <th style={{textAlign: 'center'}}>Manager</th>
                            <th style={{textAlign: 'center'}}>View</th>
                            <th style={{textAlign: 'center'}}>Apply</th>
                        </tr>
                    </thead>
                    <tbody>
                        {details}
                        {/* {this.state.details} */}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Apply;