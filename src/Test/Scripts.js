import React, {Component} from 'react';
import cookie from 'react-cookies';
import Dashboard from './Dashboard';
import Axios from 'axios';

class Scripts extends Component{
    constructor(props){
        super(props);
        this.state = {
            script_name: '',
            project_id: '',
            tester_id: '',
            script: null,
            script_data: ''
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
        var tester_id = '123'
        Axios.get('http://localhost:3001/getScripts', {params: {tester_id}}).then(result=>{
            console.log(result.data);
            this.setState({
                script_data: result.data
            })
        })
    }

    render(){


        return(
            <div class="container">
                <Dashboard/>
                <div class="modal fade" id="myModal" role="dialog">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title">Upload Script</h4>
                            </div>
                        <div class="modal-body">
                            <input type="text" name="script_name" id="script_name" placeholder="Script Name" onChange={this.onChange}/><br/><br/>
                            <input type="text" name="tester_id" id="tester_id" placeholder="Tester ID" onChange={this.onChange}/><br/><br/>
                            <input type="text" name="project_id" id="project_id" placeholder="Project ID" onChange={this.onChange}/>
                            <input type="file" name="script" id="script" onChange={this.onChangeFile.bind(this)}/>
                            <button type="button" class="btn btn-success" onClick={this.onClick}>Submit</button>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
                <div class="jumbotron" style={{marginTop: '50px', width: '700px', height: '50px', marginLeft: '15%'}}>
                    <div>
                    <h2 style={{transform: 'translate(0%, -100%)'}}>View Scripts</h2>
                    <button style={{transform: 'translate(220%, -180%)'}} type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Add Script</button>
                    </div>
                </div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th style={{textAlign: 'center'}}>Script</th>
                            <th style={{textAlign: 'center'}}>Project ID</th>
                            <th style={{textAlign: 'center'}}>Test ID</th>
                            <th style={{textAlign: 'center'}}>Download</th>
                            <th style={{textAlign: 'center'}}>Execute</th>
                            <th style={{textAlign: 'center'}}>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
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
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Scripts;