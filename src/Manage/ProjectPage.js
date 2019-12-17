import React, {Component} from 'react';
import cookie from 'react-cookies';
import Dashboard from './Dashboard';
import Axios from 'axios';



class Scripts extends Component{
    constructor(props){
        super(props);
        this.state = {
            script_name: '',
            project_id: cookie.load('project_id'),
            tester_id: cookie.load('tester_id'),
            script: null,
            script_data: [],
            notifications: [],
            spinner: ''
        }
        this.onChange = this.onChange.bind(this);
        // this.onChangeFile = this.onChangeFile.bind(this);
        this.onClick = this.onClick.bind(this);
        // this.onSubmit = this.onClick.bind(this);
    }

    onSubmit(){
        const {project_id, notification} = this.state;
        Axios.post('http://localhost:3001/notify', {project_id, notification}).then(result=>{
            console.log(result);
            alert('Notification Created');
        })
    }

    onChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onChangeFile(event){
        this.setState({
            script: event.target.files[0]
        })
    }

    onClick(){
        const data = new FormData();
        const {script_name, project_id, tester_id} = this.state;
        data.set('script_name', script_name);
        data.set('project_id', project_id);
        data.set('tester_id', tester_id);
        data.append('file', this.state.script, this.state.script.filename);
        // const {file} = this.state;
        
        
        // console.log(email);
        // console.log(courseid);
        Axios.post('http://localhost:3001/uploadScript', data, {script_name, project_id, tester_id})
        .then(res=>{
            console.log('File Uploaded Successfully');
            alert('File Uploaded Successfully');
        })
    }

    componentDidMount(){
        // addResponseMessage("Welcome to Project: "+(cookie.load('project_name')));
        // var tester_id = cookie.load('tester_id');
        var project_id = this.state.project_id;
        Axios.get('http://localhost:3001/getScriptsM', {params: {project_id}}).then(result=>{
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

    render(){
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

        let data = this.state.script_data.map(entry=>{
            var date = new Date(entry.date);
            date =  date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
            console.log(entry._id)
            return(
                <tr key={entry._id}>
                    <td style={{textAlign: 'center'}}>{entry.script_name}</td>
                    <td style={{textAlign: 'center'}}>{date}</td>
                    <td style={{textAlign: 'center'}}>{entry.tester_id}</td>
                    <td style={{textAlign: 'center'}}>{entry.tester_name}</td>
                    <td style={{textAlign: 'center'}}><a href={entry.file_location} download>Download</a></td>
                    {/* <td style={{textAlign: 'center'}}><a href="#" onClick={()=>{
                        const {_id, tester_id, project_id, file_name} = entry;
                        this.setState({
                            // spinner: <i class="fa fa-circle-o-notch fa-spin" style={{fontSize: '15px'}}></i>
                            spinner: <i class="fa fa-spinner fa-spin" style={{fontSize: '15px'}}></i>
                        });
                        Axios.post('http://localhost:3001/runScript', {_id, tester_id, project_id, file_name}).then(result=>{
                            console.log(result);
                            Axios.post('http://localhost:3001/makePayment', {tester_id, project_id}).then(result=>{
                                console.log(result);
                            })

                            if(result.data==true){
                                // alert('Tests Executed Successfully. Please view the log report');
                                this.setState({
                                    spinner: <span style={{color: '#90ee90'}} class="glyphicon glyphicon-ok"></span>
                                })
                            }
                            else{
                                this.setState({
                                    spinner: <span class="glyphicon glyphicon-remove" style={{color: 'red'}}></span>
                                })
                                // alert('There was error executing one or more test cases');
                            }
                            
                        });
                        // <div class="spinner-border"></div>
                    }}><span class="glyphicon glyphicon-play"></span></a>&nbsp;&nbsp;&nbsp;{this.state.spinner}</td> */}
                    {/* <td style={{textAlign: 'center'}}><a href="#" onClick={()=>{
                        var _id = entry._id;
                        var tester_id = entry.tester_id;
                        var project_id = entry.project_id;
                        Axios.post('http://localhost:3001/deleteScript', {_id, tester_id, project_id}).then(result=>{
                            console.log('Deleted', result);
                            alert('Script File Deleted');
                        })
                    }}><span class="glyphicon glyphicon-trash"></span></a></td> */}
                </tr>
            );
        })

        return(
            <div class="container">
                <Dashboard/>
                <span style={{marginLeft: '-900px'}}>
                    <a href="/myprojects">My Projects</a> > <a href="/myprojectpage">{cookie.load('project_name')}</a>
                </span>
                <div class="modal fade" id="myModal" role="dialog">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title">Upload Script</h4>
                            </div>
                        <div class="modal-body">
                            <input type="text" name="script_name" id="script_name" placeholder="Script Name" onChange={this.onChange}/><br/><br/>
                            {/* <input type="text" name="tester_id" id="tester_id" placeholder="Tester ID" onChange={this.onChange}/><br/><br/>
                            <input type="text" name="project_id" id="project_id" placeholder="Project ID" onChange={this.onChange}/> */}
                            <input type="file" name="script" id="script" onChange={this.onChangeFile.bind(this)}/>
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
                            <textarea type="text" rows="6" cols="80" name="notification" id="notification" placeholder="Message" onChange={this.onChange}/><br/><br/>
                            {/* <input type="text" name="tester_id" id="tester_id" placeholder="Tester ID" onChange={this.onChange}/><br/><br/>
                            <input type="text" name="project_id" id="project_id" placeholder="Project ID" onChange={this.onChange}/> */}
                            {/* <input type="file" name="script" id="script" onChange={this.onChangeFile.bind(this)}/> */}
                            <button type="button" class="btn btn-success" onClick={this.onSubmit.bind(this)}>Submit</button>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>

                
            </div>
                {/* <div class="jumbotron" style={{marginTop: '50px', width: '700px', height: '50px', marginLeft: '15%'}}>
                    <div> */}
                        {/* <h2 style={{transform: 'translate(0%, -100%)'}}>{cookie.load('project_name')}</h2> */}
                        {/* <button style={{transform: 'translate(490%, -180%)'}} type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Add Script</button> */}
                    {/* </div> */}
                {/* </div> */}
                <br /><br /><br />
                <div>
                    <table >
                        <tbody>
                            <tr style={{}}>
                                <td style={{ textAlign: 'left', padding: "10px" }}>
                                    <b>Project Name: </b>
                                </td>
                                <td style={{ textAlign: 'left', padding: "10px" }}>
                                    {cookie.load('project_name')}
                                </td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: 'left', padding: "10px" }}>
                                    <b>About this project: </b>
                                </td>
                                <td style={{ textAlign: 'left', padding: "10px" }}>
                                    {cookie.load('proj_desc')}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                </div>
                <div style={{display: 'flex'}}>
                    <a href="#" data-toggle="modal" data-target="#myModalN"><button class="btn btn-info">Create Notification</button></a>
                </div>
                <h3 style={{float:'left'}}>Files</h3>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th style={{textAlign: 'center'}}>Script</th>
                            <th style={{textAlign: 'center'}}>Date</th>
                            <th style={{textAlign: 'center'}}>Tester ID</th>
                            <th style={{textAlign: 'center'}}>Tester Name</th>
                            <th style={{textAlign: 'center'}}>Download</th>
                            
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
        );
    }
}

export default Scripts;