import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

class Sidebar extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div class="sidenav">
                <h3 style={{fontSize: "30px", WebkitTextFillColor: 'white'}}>MTaaS</h3>
                <a style={{fontSize: "17px"}} href="/createUser">Sign Up</a>
                <a style={{fontSize: "17px"}} href="/updateProfile">Profile</a>
                <a style={{fontSize: "17px"}} href="/apply">Apply</a>
                <a style={{fontSize: "17px"}} href="/myApps">My Applications</a>
                <a style={{fontSize: "17px"}} href="/genScript">Generate Script</a>
                {/* <a href="/viewApps">View Applications</a> */}
            </div>
        );
    }
}

export default Sidebar;