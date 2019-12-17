import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import cookie from 'react-cookies';
class Dashboard extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div class="container">
                <Sidebar/>
                <nav class="navbar navbar-default">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="#">MTaaS</a>
                        </div>
                        <ul class="nav navbar-nav">
                            <li class="active"><Link to="/metrics">Home</Link></li>
                            <li><Link to="/logs">View Logs</Link></li>
                            {/* <li><Link to="/report_bug">Report Bug</Link></li> */}
                            <li><Link to="/projects">My Projects</Link></li>
                            {/* <li><Link to="/bugs">View Bugs</Link></li> */}
                            <li><Link to="/createDevice">Create Device</Link></li>
                            <li><Link to="/viewDevices">View Devices</Link></li>
                        </ul>

                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="#"><span class="glyphicon glyphicon-user"></span> Welcome, {cookie.load('name')}</a></li>
                            <li><a href="/login" onClick={()=>{
                                cookie.remove('tester_id');
                            }}><span class="glyphicon glyphicon-log-in"></span> Logout</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Dashboard;


{/* <ul class="list-inline">
                    <li class="list-inline-item"><a href="#">Report Bug</a></li>
                    <li class="list-inline-item"><a href="#">View Projects</a></li>
                    <li class="list-inline-item"><a href="#">View Logs</a></li>
                </ul> */}