import React, {Component} from 'react';
import cookie from 'react-cookies';
import Dashboard from './Dashboard';
import Axios from 'axios';
import BugModal from './BugModal';

class Bugs extends Component{
    constructor(props){
        super(props);
        this.state = {
            bugs: [],
            bugDetails: [],
            summary: '',
            reproduce_steps: '',
            actual_results: '',
            expected_results: '',
            bug_type: '',
            bug_severity: '',
            date: ''
        }
    }

    componentDidMount(){
        const project_id = cookie.load('project_id');
        Axios.get('http://localhost:3001/getBugsList', {params: {project_id}}).then(result=>{
            this.setState({
                bugs: result.data
            })
        })
    }

    render(){
        let colorSeverity = '';
        
        let data = this.state.bugs.map(entry=>{
        
        console.log(entry.bug_severity)
            return(
                <tr>
                    <td style={{textAlign: 'center'}}>BG{entry._id}</td>
                    <td style={{textAlign: 'center'}}>{entry.summary}</td>
                    <td style={{textAlign: 'center'}}>{entry.project_id}</td>
                    <td style={{textAlign: 'center'}}>{entry.date}</td>
                    <td style={{textAlign: 'center'}}><a href="#" onClick={()=>{
                        var _id = entry._id;
                        
                        Axios.get('http://localhost:3001/getBugDetails', {params:{_id}}).then(result=>{
                            this.setState({
                                summary: result.data[0].summary,
                                reproduce_steps: result.data[0].reproduce_steps,
                                actual_results: result.data[0].actual_results,
                                expected_results: result.data[0].expected_results,
                                bug_type: result.data[0].bug_type,
                                bug_severity: result.data[0].bug_severity,
                                date: result.data[0].date
                            })
                        })
                        
                        
                    }} data-toggle="modal" data-target="#myModal">View</a></td>

                </tr>
            );
        })


        return(
            <div class="container">
                <Dashboard/>
                <span style={{ marginLeft: '-900px' }}>
                    <a href="/mypt">My Projects</a> > <a href="/ppt">{cookie.load('project_name')}</a>
                </span>
                <div class="modal fade" id="myModal" role="dialog">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    {/* <h3 class="modal-title">Project Name: Marketing App</h3>
                                    <h4 class="modal-title">Project ID: 123456</h4> */}
                                </div>
                                <div class="modal-body">
                                    <p><b>Summary:</b>&nbsp;&nbsp;&nbsp;&nbsp;{this.state.summary}</p>
                                    {/* <h6>Parameters to test:</h6> */}
                                    <p><b>Reproduce Steps:</b>&nbsp;&nbsp;&nbsp;&nbsp;{this.state.reproduce_steps}</p>
                                    <p><b>Actual Results:</b>&nbsp;&nbsp;&nbsp;&nbsp;{this.state.actual_results}</p>
                                    <p><b>Expected Results:</b>&nbsp;&nbsp;&nbsp;&nbsp;{this.state.expected_results}</p>
                                    <p><b>Bug Type:</b>&nbsp;&nbsp;&nbsp;&nbsp;{this.state.bug_type}</p>
                                    <p><b>Bug Severity:</b>&nbsp;&nbsp;&nbsp;&nbsp;{this.state.bug_severity}</p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                
                
                {/* <div class="jumbotron" style={{marginTop: '50px', width: '700px', height: '50px', marginLeft: '15%'}}> */}
                <div>
                    <h2 style={{float: 'left'}}>View Bugs</h2><br/><br/><br/><br/>
                    {/* </div> */}
                    <a style={{float: 'left'}} href="/report_bug"><button class="btn btn-info">Add New Bug</button></a>
                </div>
                <br/><br/>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th style={{textAlign: 'center'}}>Bug ID</th> 
                            <th style={{textAlign: 'center'}}>Bug Name</th>
                            <th style={{textAlign: 'center'}}>Project ID</th>
                            <th style={{textAlign: 'center'}}>Date</th>
                            <th style={{textAlign: 'center'}}>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data}
                        {/* <tr>
                            <td style={{textAlign: 'center'}}>BG123</td>
                            <td style={{textAlign: 'center'}}>Text Field Bug</td>
                            <td style={{textAlign: 'center'}}>434364</td>
                            <td style={{textAlign: 'center'}}>5678</td>
                            <td style={{textAlign: 'center'}}><a href="#">View</a></td>
                        </tr>
                        <tr>
                            <td style={{textAlign: 'center'}}>BG375</td>
                            <td style={{textAlign: 'center'}}>Button Bug</td>
                            <td style={{textAlign: 'center'}}>1234436</td>
                            <td style={{textAlign: 'center'}}>5678</td>
                            <td style={{textAlign: 'center'}}><a href="#">View</a></td>
                        </tr>
                        <tr>
                            <td style={{textAlign: 'center'}}>BG645</td>
                            <td style={{textAlign: 'center'}}>Toast Bug</td>
                            <td style={{textAlign: 'center'}}>35453</td>
                            <td style={{textAlign: 'center'}}>5678</td>
                            <td style={{textAlign: 'center'}}><a href="#">View</a></td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Bugs;