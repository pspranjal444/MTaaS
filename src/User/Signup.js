import React, {Component} from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
import Dashboard from '../Test/Dashboard';


class Signup extends Component{

    constructor(props)
    {
        super(props);
        {
            this.state={
                nameS:'',
                emailS:'',
                pwdS:'',
                signup:'',
                role:''
            }
        }
    }
    name(event){
        this.setState({
            nameS:event.target.value
        })
    }
    email(event){
        this.setState({
            emailS:event.target.value
        })
    }
    roleChangeHandler(event){
        this.setState({
            role:event.target.value
        })
    }
    pwd(event){
        this.setState({
            pwdS:event.target.value
        })
    }
    SubmitData(event){
        this.setState({
            signup: event.target.value
        })
        
        axios.get('http://ip-api.com/json/').then(result=>{
            console.log(result.data.lat);
            console.log(result.data.lon);

            axios.post('http://localhost:3001/signup', {
            Name: this.state.nameS,
            Email: this.state.emailS,
            Password:this.state.pwdS,
            Role:this.state.role,
            lat: result.data.lat,
            lon: result.data.lon
        })
        .then(response=>{
            console.log("Data Inserted");
            alert('User created successfully')
            //this.props.history.push('/'); //FOR GOINB BACK TO MAIN PAGE AFTER CLICKING ON SIGN
        
    });
        });
    
    } 
    render()
    {
        return(
            <div class="container">
                <div style={{display: 'flex', marginLeft: '150px'}}>
                    <div>
                        <img src={require('./logo.png')} width="150px" height="120px"></img>                       
                    </div>
                    <div>
                        <p style={{fontSize: '90px'}}>MTaaS</p>
                    </div>
                </div>
                <div class="jumbotron" style={{width: '700px', height: '420px', marginLeft: '15%'}}>
                <div style={{marginLeft: '-475px'}}><h2>Sign Up</h2></div>
                    <br/>
                    <div class="form-group">
                        <div>
                            <input type="text" id="name" name="name" class="form-control" width="50px" value={this.state.nameS} onChange={this.name.bind(this)} placeholder="Enter your name"  /><br/>
                        </div>
                        <div>
                            <input type="email"  id="email" class="form-control" name="email" value={this.state.emailS} onChange={this.email.bind(this)} placeholder="Enter your email" /><br/>
                        </div>
                        <div >
                            <input type="password" id="password" class="form-control" name="password" value={this.state.pwdS} onChange={this.pwd.bind(this)} placeholder="Enter new password" /><br/>
                        </div>
                        <div class="form-group">
                            <label class="radio-inline"><input class="" type="radio"  name="role" value="T" onChange={this.roleChangeHandler.bind(this)} required /><label>Tester</label><br/></label>
                            {/* <label class="radio-inline"><input class="" type="radio" name="role" value="A" onChange={this.roleChangeHandler.bind(this)} required /><label>Admin</label><br/></label> */}
                            <label class="radio-inline"><input class="" type="radio" name="role" value="M" onChange={this.roleChangeHandler.bind(this)} required /><label>Manager</label><br/></label>
                        </div>
                        <div>
                            <button type="submit" align="center"  class="btn btn-success" value="submit" onClick={this.SubmitData.bind(this)} name="SignIN" id="SignIN">Submit</button>
                            <br/><br/>    
                            <a href="/">Sign In</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Signup;