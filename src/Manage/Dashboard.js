import React, {Component} from 'react';
import Sidebar from './Sidebar';
import {Link} from 'react-router-dom';
import cookie from 'react-cookies';

class Dashboard extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log('NAMEEEEEE', this.props.name);
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
                            {/* <li><Link to="/createProject">Create Project</Link></li> */}
                            {/* <li><Link to="/myprojects">My Projects</Link></li> */}
                            {/* <li><Link to="/viewApps">View Applications</Link></li> */}
                            <li><Link to="/testMessages">Messages</Link></li>
                            <li><Link to="/map">My Testers</Link></li>
                            <li><Link to="/billing">Billing</Link></li>
                            {/* <li><Link to="/bugs">View Bugs</Link></li>
                            <li><Link to="/createDevice">Create Device</Link></li>
                            <li><Link to="/viewDevices">View Devices</Link></li> */}
                        </ul>

                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="#"><span class="glyphicon glyphicon-user"></span> Welcome, {cookie.load('name')}</a></li>
                            <li><a href="/" onClick={()=>{
                                cookie.remove('manager_id');
                            }}><span class="glyphicon glyphicon-log-in"></span> Logout</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Dashboard;