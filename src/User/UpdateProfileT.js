import React, { Component } from 'react';
import axios from 'axios';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';
// import Nav from '../frontend/nav';
import Dashboard from '../Test/Dashboard';

class Profile extends Component {
    constructor(props){
        super(props);
        this.state={
            email: cookie.load('email'),
            name:'',
            password:'',
            skills:'',
            role:'',
            projects:'',
            resume:''
        }
    }

    EmailUpdate(event){
        this.setState({
            email:event.target.value
        })
    }
    NameUpdate(event){
        this.setState({
            name:event.target.value
        })
    }
    PasswordUpdate(event){
        this.setState({
            password:event.target.value
        })
    }
    SkillsUpdate(event){
        this.setState({
            skills:event.target.value
        })
    }
    RoleUpdate(event){
        this.setState({
            role:event.target.value
        })
    }
    ProjectsUpdate(event){
        this.setState({
            projects:event.target.value
        })
    }
    ResumeUpdate(event){
        this.setState({
            resume:event.target.value
        })
    }
   
    UpdateProfileData(event)
    { 
        const {email,name,password,skills,role,projects,resume} = this.state;
        axios.post('http://localhost:3001/updateprofile', {email,name,password,skills,role,projects,resume})
        .then(response=>{
                if(response.data===true)
                {
                    alert("Profile Updated");
                }

    })
    };
    componentDidMount(){
        const {email} = this.state;
        axios.get('http://localhost:3001/getProfile', {params: {email}})
        .then(res => {
            console.log(res.data);
            res.data.map(item => {
            this.setState({
                
                name:item.name,
                password:item.password,
                skills:item.skills,
                role:item.role,
                projects:item.projects,
                resume:item.resume
            })
            });
        })
    } 
    render() {
        // let redirectVar=null;
        // if(!(cookie.load('email'))){
        //     redirectVar=<Redirect to='/'/>
        // }
        return (
            <div>
            {/* {redirectVar} */}
            {/* <Nav/> */}
                
                <div class="container">
                <Dashboard/>
                <div class="jumbotron" style={{width: '700px', height: '950px', marginLeft: '15%'}}>
                <h2 align="center">Update Profile</h2>
                <div>
                <label for="Email">Email</label>
                <input type="text" class="form-control" value={this.state.email} onChange={this.EmailUpdate.bind(this)} placeholder="Enter Email" /><br/><br/>
                </div>
                <div>
                <label for="Name">Name</label>
                <input type="text" class="form-control"  value={this.state.name} onChange={this.NameUpdate.bind(this)} placeholder="Enter Your Name" /><br/><br/>
                </div>
                <div>
                <label for="password">Password</label>
                <input type="password" class="form-control"  value={this.state.password} onChange={this.PasswordUpdate.bind(this)} placeholder="Enter Your Password" /><br/><br/>
                </div>
                <div>
                <label for="Skills">Skills</label>
                <input type="text" class="form-control" value={this.state.skills} onChange={this.SkillsUpdate.bind(this)} placeholder="Enter Your Skills" /><br/><br/>
                </div>
                
                <div>
                <label for="Projects">Projects</label>
                <input type="text" class="form-control"  value={this.state.projects} onChange={this.ProjectsUpdate.bind(this)} placeholder="Your Projects" /><br/><br/>
                </div>
                <div>
                <label for="Resume">Resume: (Paste your Resume)</label><br/>
                <textarea class="form-control" name="textarea" rows="10" value={this.state.resume} onChange={this.ResumeUpdate.bind(this)} ></textarea><br/><br/>
                </div>
                
                <div>
                    <button type="submit" rows="2" cols="200"   value="UpdateProfile" onClick={this.UpdateProfileData.bind(this)}  class="btn btn-success" >
                    Update Profile</button>
                </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Profile;