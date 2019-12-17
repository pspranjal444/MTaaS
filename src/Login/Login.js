import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import cookie from 'react-cookies';
import Sidebar from '../Sidebar/Sidebar';
import Dashboard from '../Test/Dashboard';
// import {Redirect} from 'react-router';
class Login extends Component{

    constructor(props){
        super(props);
        this.state={
            id:'',
            pwd:'',
            login:'',
            roleS: ''
        }
    }

    SigninData()
    {
        axios.post('http://localhost:3001/login', {
            id: this.state.id,
            pwd: this.state.pwd,
            // login: event.target.value
        })
        .then(response=>{
                console.log('I am here')
                var receive = response.data;
                console.log(response.data);
                cookie.save('email', this.state.id);
                cookie.save('name', receive[0].name)
                console.log(receive[0].role);
                if(receive[0].role === "T" && this.state.roleS === 'T')
                {
                    cookie.save('tester_id', receive[0].user_id);
                    this.props.history.push('/metrics');
                }
                else if(receive[0].role==='M' && this.state.roleS === 'M')
                {
                    cookie.save('manager_id', receive[0].user_id);
                    this.props.history.push('/metricsManager');
                }

    });
    } 

    LoginPwd(event){
        this.setState({
            pwd:event.target.value
        })
    }
    LoginID(event){
        this.setState({
            id:event.target.value
        })
    }
    roleChangeHandler(event){
        this.setState({
            roleS:event.target.value
        })
    }
    render()
    {
        
        return(
            <div>
                <div class="container">
                    <div style={{display: 'flex', marginLeft: '150px'}}>
                        <div>
                            <img src={require('./logo.png')} width="150px" height="120px"></img>                       
                        </div>
                        <div>
                            <p style={{fontSize: '90px'}}>MTaaS</p>
                        </div>
                    </div>
                    <div class="jumbotron" style={{width: '700px', height: '360px', marginLeft: '15%'}}>
                        <div style={{marginLeft: '-475px'}}><h2>Sign In</h2></div>
                        <br/>
                        <div >
                            <input type="email" class="form-control" name="input" value={this.state.id} onChange={this.LoginID.bind(this)} placeholder="Enter your email" /><br/>
                        </div>
                        <div >
                            <input type="password" class="form-control" name="password" value={this.state.pwd} onChange={this.LoginPwd.bind(this)} placeholder="Enter your password" /><br/>
                        </div>

                        <div class="form-group">
                            <label class="radio-inline"><input class="" type="radio"  name="role" value="T" onChange={this.roleChangeHandler.bind(this)} required /><label>Tester</label><br/></label>
                            {/* <label class="radio-inline"><input class="" type="radio" name="role" value="A" onChange={this.roleChangeHandler.bind(this)} required /><label>Admin</label><br/></label> */}
                            <label class="radio-inline"><input class="" type="radio" name="role" value="M" onChange={this.roleChangeHandler.bind(this)} required /><label>Manager</label><br/></label>
                        </div>
                        <div>
                            <button type="submit" value="SignIN" onClick={this.SigninData.bind(this)} name="SignIN" class="btn btn-success" >Sign In</button><br/><br/>
                            {/* <br/> */}
                            <a href="/createUser">Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;