import React, {Component} from 'react';
import Sidebar from '../Sidebar/Sidebar';
import {Link} from 'react-router-dom';

class Dashboard extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Sidebar/>
                <nav class="navbar navbar-default">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="#">MTaaS</a>
                        </div>
                        <ul class="nav navbar-nav">
                            <li class="active"><Link to="/metricsManager">Home</Link></li>
                            <li><Link to="/createProject">Create Project</Link></li>
                            <li><Link to="/myprojects">My Projects</Link></li>
                            <li><Link to="/viewApps">View Applications</Link></li>
                            <li><Link to="#">My Testers</Link></li>
                            <li><Link to="#">Resources</Link></li>
                            <li><Link to="#">Billing</Link></li>
                            {/* <li><Link to="/bugs">View Bugs</Link></li>
                            <li><Link to="/createDevice">Create Device</Link></li>
                            <li><Link to="/viewDevices">View Devices</Link></li> */}
                        </ul>

                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                            <li><a href="/login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Dashboard;