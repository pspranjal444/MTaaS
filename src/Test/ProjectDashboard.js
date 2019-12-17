import React, { Component } from 'react';
import cookie from 'react-cookies';
import Dashboard from './Dashboard';
import Axios from 'axios';

class ProjectDashboard extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div class="container">
                <Dashboard />
                <span style={{ marginLeft: '-900px' }}>
                    <a href="/mypt">My Projects</a> > <a href="/ppt">{cookie.load('project_name')}</a>
                </span>
                <br/><br/><br/>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td style={{ textAlign: 'left' }}>
                                    <b>Project Name: </b>
                                </td>
                                <td style={{ textAlign: 'right' }}>
                                    {cookie.load('project_name')}
                                </td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: 'left' }}>
                                    <b>About this project: </b>
                                </td>
                                <td style={{ textAlign: 'right' }}>
                                    {cookie.load('proj_desc')}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                </div>
                <div style={{display: 'flex'}}>
                    <button type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal">Add Script</button>&nbsp;&nbsp;&nbsp;
                    <button type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal">Bugs</button>&nbsp;&nbsp;&nbsp;
                    <button type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal">Generate Script</button>
                </div>
            </div>
        );
    }
}

export default ProjectDashboard;