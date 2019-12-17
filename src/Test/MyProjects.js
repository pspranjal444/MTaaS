import React, {Component} from 'react';
import Dashboard from './Dashboard';
import Axios from 'axios';
import cookie from 'react-cookies';

class MyProjects extends Component{
    constructor(props){
        super(props);
        this.state = {
            records: [],
            details: '',
            project_name: '',
            project_id: '',
            manager_name: '',
            proj_desc: '',
            app_link: '',
            app_name: ''
        }
    }

    componentDidMount(){
        // const manager_id = cookie.load('manager_id');
        console.log('Hello')
        Axios.get('http://localhost:3001/getAllProjects').then(result=>{
            console.log(result);
            console.log('Hello')
            this.setState({
                records: result.data
            })
        })
    }

    render(){
        // let details = null;
        let projects = this.state.records.map((entry)=>{
            console.log(entry.project_name)
            var date = new Date(entry.date);
            date =  date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
            return(
                <tr key={entry.project_id}>
                    <td style={{textAlign: 'center'}}>{entry.project_name}</td>
                    <td style={{textAlign: 'center'}}>{entry.project_id}</td>
                    <td style={{textAlign: 'center'}}>{entry.manager_name}</td>
                    <td style={{textAlign: 'center'}}>{date}</td>
                    <td style={{textAlign: 'center'}}><a href="/ppt"><button class="btn btn-success" onClick={()=>{
                        cookie.save('project_id', entry.project_id);
                        cookie.save('project_name', entry.project_name);
                        cookie.save('proj_desc', entry.proj_desc)
                        // this.setState({
                        //     project_name: entry.project_name,
                        //     project_id: entry.project_id,
                        //     manager_name: entry.manager_name,
                        //     manager_id: entry.manager_id,
                        //     proj_desc: entry.proj_desc,
                        //     app_link: entry.app_link,
                        //     app_name: entry.app_name
                        // })
                        
                    }}>View</button></a></td>
                </tr>
            )
        })
        return(
            <div class="container">
                <Dashboard/>
                <span style={{marginLeft: '-1000px'}}>
                    <a href="/mypt">My Projects</a>
                </span>
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
                                           <p><b>Application Link: </b><a href={this.state.app_link}>{this.state.app_link}</a></p>
                                         </div>
                                         <div class="modal-footer">
                                           <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                         </div>
                                       </div>
                                  
                                     </div>
                                   </div>
                <div>
                        <h2>My Projects</h2>
                </div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th style={{textAlign: 'center'}}>Project Name</th>
                            <th style={{textAlign: 'center'}}>Project ID</th>
                            <th style={{textAlign: 'center'}}>Manager</th>
                            <th style={{textAlign: 'center'}}>Date Created</th>
                            <th style={{textAlign: 'center'}}>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects}
                        {this.state.details}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MyProjects;