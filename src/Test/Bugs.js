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
            bugDetails: []
        }
    }

    componentDidMount(){
        Axios.get('http://localhost:3001/getBugsList').then(result=>{
            this.setState({
                bugs: result.data
            })
        })
    }

    render(){
        var colorSeverity = ''
        
        let data = this.state.bugs.map(entry=>{
        // let bugDetails = [];  
            switch(entry.bug_severity){
                case "low": colorSeverity = 'green';
                            break;
                case "mid": colorSeverity = 'yellow';
                            break;
                case "high": colorSeverity = 'red';
                            break;
            }
            // let summary = entry.summary;
            // let test_id = entry.test_id;
            // let project_id = entry.project_id;
            // let reproduce_steps = entry.reproduce_steps;
            // let actual_results = entry.actual_results;
            // let expected_results = entry.expected_results;
            // let bug_type = entry.bug_type;
            // let bug_severity = entry.bug_severity;
            return(
                <tr>
                    <td style={{textAlign: 'center'}}>BG{entry._id}</td>
                    <td style={{textAlign: 'center'}}>{entry.summary}</td>
                    <td style={{textAlign: 'center'}}>{entry.project_id}</td>
                    <td style={{textAlign: 'center'}}>{entry.test_id}</td>
                    <td style={{textAlign: 'center'}}><a href="#" onClick={()=>{
                        var _id = entry._id;
                        
                        Axios.get('http://localhost:3001/getBugDetails', {params:{_id}}).then(result=>{
                            this.setState({
                                bugDetails: result.data
                            })
                        })
                        
                        
                    }} data-toggle="modal" data-target="#myModal">View</a></td>
                    <td><BugModal summary={entry.summary}></BugModal></td>
                    <td><div class="modal fade" id="myModal" role="dialog">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    {/* <h3 class="modal-title">Project Name: Marketing App</h3>
                                    <h4 class="modal-title">Project ID: 123456</h4> */}
                                </div>
                                <div class="modal-body">
                                    <p><b>Summary:</b>&nbsp;&nbsp;&nbsp;&nbsp;{entry.summary}</p>
                                    {/* <h6>Parameters to test:</h6> */}
                                    <p><b>Test ID:</b>&nbsp;&nbsp;&nbsp;&nbsp;{entry.test_id}</p>
                                    <p><b>Project ID:</b>&nbsp;&nbsp;&nbsp;&nbsp;{entry.project_id}</p>
                                    <p><b>Reproduce Steps:</b>&nbsp;&nbsp;&nbsp;&nbsp;{entry.reproduce_steps}</p>
                                    <p><b>Actual Results:</b>&nbsp;&nbsp;&nbsp;&nbsp;{entry.actual_results}</p>
                                    <p><b>Expected Results:</b>&nbsp;&nbsp;&nbsp;&nbsp;{entry.expected_results}</p>
                                    <p><b>Bug Type:</b>&nbsp;&nbsp;&nbsp;&nbsp;{entry.bug_type}</p>
                                    <p style={{WebkitTextFillColor: colorSeverity}}><b>Bug Severity:</b>&nbsp;&nbsp;&nbsp;&nbsp;{entry.bug_severity}</p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div></td>

                </tr>
            );
        })


        return(
            <div class="container">
                <Dashboard/>
                
                <div class="jumbotron" style={{marginTop: '50px', width: '700px', height: '50px', marginLeft: '15%'}}>
                    <h2 style={{transform: 'translate(0%, -100%)'}}>View Bugs</h2>
                </div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th style={{textAlign: 'center'}}>Bug ID</th> 
                            <th style={{textAlign: 'center'}}>Bug Name</th>
                            <th style={{textAlign: 'center'}}>Project ID</th>
                            <th style={{textAlign: 'center'}}>Test ID</th>
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