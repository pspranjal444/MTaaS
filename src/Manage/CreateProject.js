import React, {Component} from 'react';
import Dashboard from './Dashboard';
import Axios from 'axios';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';


class CreateProject extends Component{
    constructor(props){
        super(props)

        this.state = {
            proj_name: '',
            manager_name: '',
            manager_id: cookie.load('manager_id'),
            proj_desc: '',
            app_link: '',
            app: ''
        }

        this.onChange = this.onChange.bind(this);
        // this.onChangeFile = this.onChangeFile.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onChangeFile(event){
        this.setState({
            app: event.target.files[0]
        })
    }

    onClick(){
        const data = new FormData();
        const {app_name, manager_id, manager_name, app_link, proj_name, proj_desc} = this.state;
        data.set('app_name', app_name);
        // data.set('project_id', project_id);
        data.set('manager_id', manager_id);
        data.set('manager_name', manager_name);
        data.set('app_link', app_link);
        data.set('proj_name', proj_name);
        data.set('proj_desc', proj_desc);
        data.append('app', this.state.app, this.state.app.filename);
        Axios.post('http://localhost:3001/createProject', data, {app_name, manager_id, manager_name, app_link, proj_name, proj_desc}).then(result=>{
            console.log(result);
            alert('Project Created Successfully');
        })
    }

    render(){
        let redirectVar = null;
        if(!cookie.load('manager_id')){
            redirectVar = <Redirect to="/login"/>
        }
        return(
            <div class="container">
                {redirectVar}
                    <Dashboard/>
                    <a style={{ float: 'left', marginLeft: '17px' }} href="/myprojects"><button class="btn btn-danger"><span class="glyphicon glyphicon-chevron-left"></span> Back</button></a><br /><br /><br />
                    <div class="jumbotron" style={{width: '700px', height: '750px', marginLeft: '15%'}}>
                        <div style={{marginLeft: '-375px'}}><h2><span class="glyphicon glyphicon-plus"></span> Add Project</h2></div>
                        
                        <br/>
                        
                        <div class="form-group">
                            <label for="usr" class="pull-left">Project Name:</label>
                            <input type="text" class="form-control" name="proj_name" onChange={this.onChange} id="project_name"/>
                        </div>
                        <div class="form-group">
                            <label for="usr" class="pull-left">Your Name:</label>
                            <input type="text" class="form-control" name="manager_name" onChange={this.onChange} id="manager_name"/>
                        </div>
                
                        <div class="form-group">
                            <label for="usr" class="pull-left">Project Description:</label>
                            <textarea type="text" rows="5" class="form-control" name="proj_desc" onChange={this.onChange} id="proj_desc"/>
                        </div>

                        <div class="form-group">
                            <label for="usr" class="pull-left">App Link:</label>
                            <textarea type="text" rows="5" class="form-control" name="app_link" onChange={this.onChange} id="app_link"/>
                        </div>
                        <input type="file" name="app" id="app" onChange={this.onChangeFile.bind(this)}/>
                        <br/>
                        <button type="button" class="btn btn-success" onClick={this.onClick}>Submit</button>

                        <br/><br/>
                        
                    </div>
                </div>
        )
    }

}

export default CreateProject;