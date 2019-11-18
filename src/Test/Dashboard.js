import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Dashboard extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div class="container">
                <nav class="navbar navbar-default">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="#">MTaaS</a>
                        </div>
                        <ul class="nav navbar-nav">
                            <li class="active"><Link to="/">Home</Link></li>
                            <li><Link to="/scripts">View Scripts</Link></li>
                            <li><Link to="/logs">View Logs</Link></li>
                            <li><Link to="/report_bug">Report Bug</Link></li>
                            <li><Link to="/projects">View Projects</Link></li>
                            <li><Link to="/bugs">View Bugs</Link></li>
                            <li><Link to="/createDevice">Create Device</Link></li>
                            <li><Link to="/viewDevices">View Devices</Link></li>
                        </ul>

                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                            <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
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