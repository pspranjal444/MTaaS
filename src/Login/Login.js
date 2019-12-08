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
            login:''
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
                console.log(receive[0].role);
                if(receive[0].role === "T")
                {
                    this.props.history.push('/metrics');
                    console.log('MY ID IN LOGIN', receive[0].user_id)
                    cookie.save('tester_id', receive[0].user_id);
                }
                else if(receive[0].role==='M')
                {
                    this.props.history.push('/metricsManager');
                    cookie.save('manager_id', receive[0].user_id);
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
    render()
    {
        
        return(
            <div>
                <div class="container">
                    <Sidebar></Sidebar>
                    <Dashboard/>
                    <div class="jumbotron" style={{width: '700px', height: '400px', marginLeft: '15%'}}>
                        <div style={{marginLeft: '-475px'}}><h2>Sign In</h2></div>
                        <br/>
                        <div >
                            <input type="email" class="form-control" name="input" value={this.state.id} onChange={this.LoginID.bind(this)} placeholder="Enter your email" /><br/>
                        </div>
                        <div >
                            <input type="password" class="form-control" name="password" value={this.state.pwd} onChange={this.LoginPwd.bind(this)} placeholder="Enter your password" /><br/>
                        </div>
                        <div>
                            <button type="submit" value="SignIN" onClick={this.SigninData.bind(this)} name="SignIN" class="btn btn-success" >Sign In</button><br/><br/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;