import React, { Component } from 'react';
import cookie from 'react-cookies';
import Dashboard from './Dashboard';
import Axios from 'axios';
import LoadingOverlay from 'react-loading-overlay';



class Scripts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: cookie.load('name'),
            script_name: '',
            project_id: cookie.load('project_id'),
            tester_id: cookie.load('tester_id'),
            script: null,
            script_data: [],
            spinner: '',
            isActive: false,
            notification: '',
            notifications: []
        }
        this.onChange = this.onChange.bind(this);
        // this.onChangeFile = this.onChangeFile.bind(this);
        this.onClick = this.onClick.bind(this);

        // this.onSubmit = this.onClick.bind(this);
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onChangeFile(event) {
        this.setState({
            script: event.target.files[0]
        })
    }

    onSubmit(){
        const {tester_id, project_id, notification, name} = this.state;
        Axios.post('http://localhost:3001/notify', {tester_id, project_id, notification, name}).then(result=>{
            console.log(result);
            alert('Notification Created');
        })
    }

    onClick() {
        const data = new FormData();
        const { script_name, project_id, tester_id, name } = this.state;
        data.set('name', name);
        data.set('script_name', script_name);
        data.set('project_id', project_id);
        data.set('tester_id', tester_id);
        data.append('file', this.state.script, this.state.script.filename);
        // const {file} = this.state;


        // console.log(email);
        // console.log(courseid);
        Axios.post('http://localhost:3001/uploadScript', data, { script_name, project_id, tester_id, name })
            .then(res => {
                console.log('File Uploaded Successfully');
                alert('File Uploaded Successfully');
            })
    }

    componentDidMount() {
        // addResponseMessage("Welcome to Project: "+(cookie.load('project_name')));
        var tester_id = cookie.load('tester_id');
        var project_id = this.state.project_id;
        Axios.get('http://localhost:3001/getScripts', { params: { tester_id, project_id } }).then(result => {
            console.log(result.data);
            this.setState({
                script_data: result.data
            })
        })

        Axios.get('http://localhost:3001/getNotifications', {params: {project_id}}).then(result=>{
            console.log(result.data);
            this.setState({
                notifications: result.data
            })
        })
    }

    render() {
        let notification = this.state.notifications.map(entry=>{
            var date = new Date(entry.date);
            date =  date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
            var owner = 'Manager';
            var id = cookie.load('manager_id');
            if(entry.tester_id){
                var owner = entry.tester_name;
                var id = entry.tester_id;
            }
            return(
                <tr key={entry._id}>
                    <td style={{textAlign: 'center'}}>{entry.notification}</td>
                    <td style={{textAlign: 'center'}}>{owner}</td>
                    <td style={{textAlign: 'center'}}>{id}</td>
                    <td style={{textAlign: 'center'}}>{date}</td>
                </tr>
            )
        })



        let data = this.state.script_data.map(entry => {
            var date = new Date(entry.date);
            date = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
            console.log(entry._id)
            return (
                <tr key={entry._id}>
                    <td style={{ textAlign: 'center' }}>{entry.script_name}</td>
                    <td style={{ textAlign: 'center' }}>{date}</td>
                    <td style={{ textAlign: 'center' }}><a href={entry.file_location} download>Download</a></td>
                    <td style={{ textAlign: 'center' }}><a href="#" onClick={() => {
                        const { _id, tester_id, project_id, file_name } = entry;
                        this.setState({
                            // spinner: <i class="fa fa-circle-o-notch fa-spin" style={{fontSize: '15px'}}></i>
                            isActive: true 
                            
                        });
                        Axios.post('http://localhost:3001/runScript', { _id, tester_id, project_id, file_name }).then(result => {
                            console.log(result);
                            Axios.post('http://localhost:3001/makePayment', { tester_id, project_id }).then(result => {
                                console.log(result);
                            })

                            if (result.data == true) {
                                
                                this.setState({
                                    isActive: false,
                                    spinner: <span style={{ color: '#90ee90', fontSize: "30px" }} class="glyphicon glyphicon-ok">Correct. Please see logs.</span>
                                })
                                
                            }
                            else {
                                this.setState({
                                    isActive: false,
                                    // spinner: <span class="glyphicon glyphicon-remove" style={{ color: 'red' }}></span>
                                }, alert('There was error executing one or more test cases'));
                            }

                        });
                        // <div class="spinner-border"></div>
                    }}><span class="glyphicon glyphicon-play"></span></a>&nbsp;&nbsp;&nbsp;</td>
                    <td style={{ textAlign: 'center' }}><a href="#" onClick={() => {
                        var _id = entry._id;
                        var tester_id = entry.tester_id;
                        var project_id = entry.project_id;
                        Axios.post('http://localhost:3001/deleteScript', { _id, tester_id, project_id }).then(result => {
                            console.log('Deleted', result);
                            alert('Script File Deleted');
                        })
                    }}><span class="glyphicon glyphicon-trash"></span></a></td>
                </tr>
            );
        })

        return (
            <LoadingOverlay active={this.state.isActive} spinner text='Executing...'>
                
            <div class="container">
                <Dashboard />
                <span style={{ marginLeft: '-900px' }}>
                    <a href="/mypt">My Projects</a> > <a href="/ppt">{cookie.load('project_name')}</a>
                </span>
                <div class="modal fade" id="myModal" role="dialog">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title">Upload Script</h4>
                            </div>
                            <div class="modal-body">
                                <input type="text" name="script_name" id="script_name" placeholder="Script Name" onChange={this.onChange} /><br /><br />
                                {/* <input type="text" name="tester_id" id="tester_id" placeholder="Tester ID" onChange={this.onChange}/><br/><br/>
                            <input type="text" name="project_id" id="project_id" placeholder="Project ID" onChange={this.onChange}/> */}
                                <input type="file" name="script" id="script" onChange={this.onChangeFile.bind(this)} />
                                <button type="button" class="btn btn-success" onClick={this.onClick}>Submit</button>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="modal fade" id="myModalN" role="dialog">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title">Notification</h4>
                            </div>
                            <div class="modal-body">
                                <textarea rows="6" cols="80" type="text" name="notification" id="notification" placeholder="Message" onChange={this.onChange} /><br /><br />
                                {/* <input type="text" name="tester_id" id="tester_id" placeholder="Tester ID" onChange={this.onChange}/><br/><br/>
                            <input type="text" name="project_id" id="project_id" placeholder="Project ID" onChange={this.onChange}/> */}
                                <button type="button" class="btn btn-success" onClick={this.onSubmit.bind(this)}>Submit</button>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                
                
                <br /><br /><br />
                {/* <div class="jumbotron" style={{marginTop: '50px', width: '700px', height: '50px', marginLeft: '15%'}}> */}
                {/* <div style={{float: 'left'}}> */}
                {/* <h2 style={{transform: 'translate(-39.3%, -100%)'}}>{cookie.load('project_name')}</h2> */}
                {/* <button style={{transform: 'translate(490%, -180%)'}} type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Add Script</button> */}
                {/* </div> */}
                {/* </div> */}
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td style={{ textAlign: 'left', padding: "10px" }}>
                                    <b>Project Name: </b>
                                </td>
                                <td style={{ textAlign: 'left', padding: "10px"  }}>
                                    {cookie.load('project_name')}
                                </td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: 'left', padding: "10px"  }}>
                                    <b>About this project: </b>
                                </td>
                                <td style={{ textAlign: 'right', padding: "10px"  }}>
                                    {cookie.load('proj_desc')}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                </div>
                {/* <br/><br/><br/> */}
                {/* <nav class="navbar navbar-default">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="#">{cookie.load('project_name')}</a>
                        </div>
                        <ul class="nav navbar-nav">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Page 1</a></li>
                            <li><a href="#">Page 2</a></li>
                            <li><a href="#">Page 3</a></li>
                        </ul>
                    </div>
                </nav> */}
                {/* <nav class="navbar navbar-inverse">
                    <ul class="nav navbar-nav">
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                    </ul>
                    <p class="navbar-text">Some text</p>
                </nav> */}
                {/* <br/> */}
                <div style={{display: 'flex'}}>
                    <button type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal">Add Script</button>&nbsp;&nbsp;&nbsp;
                    <a href="/bugs"><button class="btn btn-info">Bugs</button></a>&nbsp;&nbsp;&nbsp;
                    <a href="/genScript"><button class="btn btn-info">Generate Script</button></a>&nbsp;&nbsp;&nbsp;
                    <a href="#" data-toggle="modal" data-target="#myModalN"><button class="btn btn-info">Create Notification</button></a>
                </div>
                
                <h3 style={{ float: 'left' }}>Files</h3>
                {this.state.spinner}
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'center' }}>Script</th>
                            <th style={{ textAlign: 'center' }}>Date</th>
                            <th style={{ textAlign: 'center' }}>Download</th>
                            <th style={{ textAlign: 'center' }}>Execute</th>
                            <th style={{ textAlign: 'center' }}>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                            <td style={{textAlign: 'center'}}>Test Text Field</td>
                            <td style={{textAlign: 'center'}}>123456</td>
                            <td style={{textAlign: 'center'}}>5678</td>
                            <td style={{textAlign: 'center'}}><a href="#">Download</a></td>
                            <td style={{textAlign: 'center'}}><a href="#"><span class="glyphicon glyphicon-play"></span></a></td>
                            <td style={{textAlign: 'center'}}><a href="#"><span class="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        <tr>
                            <td>Test Button</td>
                            <td>123457</td>
                            <td>5679</td>
                            <td><a href="#">Download</a></td>
                            <td style={{textAlign: 'center'}}><a href="#"><span class="glyphicon glyphicon-play"></span></a></td>
                            <td style={{textAlign: 'center'}}><a href="#"><span class="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        <tr>
                            <td>Test Toast</td>
                            <td>123458</td>
                            <td>5676</td>
                            <td><a href="#">Download</a></td>
                            <td style={{textAlign: 'center'}}><a href="#"><span class="glyphicon glyphicon-play"></span></a></td>
                            <td style={{textAlign: 'center'}}><a href="#"><span class="glyphicon glyphicon-trash"></span></a></td>
                        </tr> */}
                        {data}
                    </tbody>
                </table>

                <h3 style={{float:'left'}}>Notifications</h3>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th style={{textAlign: 'center'}}>Message</th>
                            <th style={{textAlign: 'center'}}>Owner</th>
                            <th style={{textAlign: 'center'}}>ID</th>
                            <th style={{textAlign: 'center'}}>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {notification}
                    </tbody>
                </table>
            </div>
            </LoadingOverlay>
        );
    }
}

export default Scripts;