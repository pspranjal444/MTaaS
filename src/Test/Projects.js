import React, {Component} from 'react';
import Dashboard from './Dashboard';

class Projects extends Component{
    constructor(props){
        super(props);
        this.state ={
            modal: ''
        }
    }

    render(){
        return (
            <div class="container">
                <Dashboard/>
                <div class="modal fade" id="myModal" role="dialog">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h3 class="modal-title">Project Name: Marketing App</h3>
                                <h4 class="modal-title">Project ID: 123456</h4>
                            </div>
                            <div class="modal-body">
                                <h5><b>Introduction:</b>&nbsp;&nbsp;&nbsp;&nbsp;This is marketing app for users all around the world</h5>
                                {/* <h6>Parameters to test:</h6> */}
                                <p><b>Parameters to test:</b>&nbsp;&nbsp;&nbsp;&nbsp;Go into the activity name: 'appActivity' and test for textfields and buttons</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="jumbotron" style={{marginTop: '50px', width: '700px', height: '50px', marginLeft: '15%'}}>
                    <div>
                        <h2 style={{transform: 'translate(0%, -100%)'}}>View Projects</h2>
                    </div>
                </div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th style={{textAlign: 'center'}}>Project Name</th>
                            <th style={{textAlign: 'center'}}>Project ID</th>
                            <th style={{textAlign: 'center'}}>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{textAlign: 'center'}}>Marketing app</td>
                            <td style={{textAlign: 'center'}}>123456</td>
                            <td style={{textAlign: 'center'}}><a href="#" data-toggle="modal" data-target="#myModal">View</a></td>
                        </tr>
                        <tr>
                            <td style={{textAlign: 'center'}}>Shopping app</td>
                            <td style={{textAlign: 'center'}}>2324434</td>
                            <td style={{textAlign: 'center'}}><a href="#">View</a></td>
                        </tr>
                        <tr>
                            <td style={{textAlign: 'center'}}>Marketing app</td>
                            <td style={{textAlign: 'center'}}>534364</td>
                            <td style={{textAlign: 'center'}}><a href="#">View</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Projects;