import React, {Component} from 'react';
import cookie from 'react-cookies';
import Axios from 'axios';
import Dashboard from './Dashboard';

class ViewApplications extends Component {
    constructor(){
        super();

        this.state = {
            manager_id: cookie.load('manager_id'),
            applications: [],
            tester_name: '',
            skills: '',
            projects: '',
            resume: ''
        }
    }

    componentDidMount(){
        const {manager_id} = this.state;
        Axios.get('http://localhost:3001/getApps', {params: {manager_id}}).then(result=>{
            console.log(result);
            this.setState({
                applications: result.data
            })
        })
    }

    render(){

        let details = this.state.applications.map(entry=>{
            return(
                <tr key={entry._id}>
                    <td style={{textAlign: 'center'}}>{entry.project_name}</td>
                    <td style={{textAlign: 'center'}}>{entry.project_id}</td>
                    <td style={{textAlign: 'center'}}>{entry.tester_id}</td>
                    <td style={{textAlign: 'center'}}><button class="btn btn-primary" data-toggle="modal" data-target="#myModal" onClick={()=>{
                        const {tester_id} = entry;
                        Axios.get('http://localhost:3001/getTesterProfile', {params: {tester_id}}).then(result=>{
                            console.log(result)
                            this.setState({
                                tester_name: result.data[0].name,
                                skills: result.data[0].skills,
                                projects: result.data[0].projects,
                                resume: result.data[0].resume
                            })
                        })
                    }}>View</button></td>
                    <td style={{textAlign: 'center'}}><button class="btn btn-success" onClick={()=>{
                        const {tester_id, project_id} = entry;
                        Axios.post('http://localhost:3001/approve', {tester_id, project_id}).then(result=>{
                            alert('Approved');
                        })
                    }}>Approve</button></td>
                    <td style={{textAlign: 'center'}}><button class="btn btn-danger" onClick={()=>{
                        const {tester_id, project_id} = entry;
                        Axios.post('http://localhost:3001/decline', {tester_id, project_id}).then(result=>{
                            alert('Declined');
                        })
                    }}>Decline</button></td>
                </tr>
            )
        })

        return (
            <div>
                <div class="container">
                    <Dashboard/>
                    <h2>My Applications</h2>
                    <div id="myModal" class="modal fade" role="dialog">
                                     <div class="modal-dialog">
                                       <div class="modal-content">
                                         <div class="modal-header">
                                           <button type="button" class="close" data-dismiss="modal">&times;</button>
                                           <h4 class="modal-title">{this.state.project_name}</h4>
                                         </div>
                                         <div class="modal-body">
                                           <p><b>Name: </b>{this.state.tester_name}</p>
                                           <p><b>Skills: </b>{this.state.skills}</p>
                                           <p><b>Projects: </b>{this.state.projects}</p>
                                           <p><b>Resume: </b>{this.state.resume}</p>
                                        </div>
                                         <div class="modal-footer">
                                           <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                         </div>
                                       </div>
                                  
                                     </div>
                                   </div>
               
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th style={{textAlign: 'center'}}>Project Name</th>
                            <th style={{textAlign: 'center'}}>Project ID</th>
                            <th style={{textAlign: 'center'}}>Tester ID</th>
                            <th style={{textAlign: 'center'}}>View Profile</th>
                            <th style={{textAlign: 'center'}}>Approve</th>
                            <th style={{textAlign: 'center'}}>Decline</th>
                        </tr>
                    </thead>
                    <tbody>
                        {details}
                        {/* {this.state.details} */}
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}

export default ViewApplications;