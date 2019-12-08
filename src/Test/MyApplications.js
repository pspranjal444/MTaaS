import React, {Component} from 'react';
import Axios from 'axios';
import Dashboard from './Dashboard';
import cookie from 'react-cookies';

class MyApplications extends Component{
    constructor(){
        super();

        this.state = {
            projects: []
        }
    }

    componentDidMount(){
        const tester_id = cookie.load('tester_id');
        Axios.get('http://localhost:3001/getMyApps', {params: {tester_id}}).then(result=>{
            this.setState({
                projects: result.data
            })
        })
    }

    render(){
        let details = this.state.projects.map(entry=>{
            return(
                <tr key={entry.project_id}>
                    <td style={{textAlign: 'center'}}>{entry.project_name}</td>
                    <td style={{textAlign: 'center'}}>{entry.project_id}</td>
                    <td style={{textAlign: 'center'}}>{entry.manager_name}</td>
                    <td style={{textAlign: 'center'}}>{entry.result ? "Accepted" : "UC or Rejected"}</td>
                </tr>
            )
        })
        return(
            <div class="container">
                <Dashboard/>
                <h2>My Applications</h2>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th style={{textAlign: 'center'}}>Project Name</th>
                            <th style={{textAlign: 'center'}}>Project ID</th>
                            <th style={{textAlign: 'center'}}>Manager</th>
                            <th style={{textAlign: 'center'}}>Status</th>
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

export default MyApplications;