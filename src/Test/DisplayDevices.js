import React, {Component} from 'react';
import cookie from 'react-cookies';
import Dashboard from './Dashboard';
import Axios from 'axios';

class Scripts extends Component{
    constructor(props){
        super(props);
        this.state = {
            device_data: [],
            status: <p style={{width: '30px', height: '20px', color: 'red'}}><b>Status</b></p>
        }
        // this.onChange = this.onChange.bind(this);
        // this.onChangeFile = this.onChangeFile.bind(this);
        // this.onClick = this.onClick.bind(this);
    }

    // onChange(event){
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    // }

    // onChangeFile(event){
    //     this.setState({
    //         script: event.target.files[0]
    //     })
    // }

    // onClick(){
    //     const data = new FormData();
    //     const {script_name, project_id, tester_id} = this.state;
    //     data.set('script_name', script_name);
    //     data.set('project_id', project_id);
    //     data.set('tester_id', tester_id);
    //     data.append('file', this.state.script, this.state.script.filename);
    //     // const {file} = this.state;
        
        
    //     // console.log(email);
    //     // console.log(courseid);
    //     Axios.post('http://localhost:3001/uploadScript', data, {script_name, project_id, tester_id})
    //     .then(res=>{
    //         console.log('File Uploaded Successfully');
    //         alert('File Uploaded Successfully');
    //     })
    // }

    componentDidMount(){
        var tester_id = '123'
        Axios.get('http://localhost:3001/getDevices', {params: {tester_id}}).then(result=>{
            console.log(result.data);
            this.setState({
                device_data: result.data
            })
        })
    }

    render(){
        let data = this.state.device_data.map(entry=>{
            return(
                <tr>
                    <td style={{textAlign: 'center'}}>{entry.project_id}</td>
                    <td style={{textAlign: 'center'}}>{entry.device_name}</td>
                    <td style={{textAlign: 'center'}}>{entry.ram}</td>
                    <td style={{textAlign: 'center'}}>{entry.processor}</td>
                    <td style={{textAlign: 'center'}}><button class="btn btn-success" onClick={()=>{
                        // const {_id, tester_id, project_id, file_name} = entry;
                        this.setState({
                            status: <p style={{width: '30px', height: '30px', color: 'green'}}><b>Status</b></p>
                        })
                    }}>Start</button>&nbsp;&nbsp;&nbsp;</td>
                    <td style={{textAlign: 'center'}}><button class="btn btn-danger" onClick={()=>{
                        this.setState({
                            status: <p style={{width: '30px', height: '30px', color: 'red'}}><b>Status</b></p>
                        })
                    }}>Stop</button></td>

                    <td style={{textAlign: 'center'}}>{this.state.status}</td>
                </tr>
            );
        })

        return(
            <div class="container">
                <Dashboard/>
                <div class="jumbotron" style={{marginTop: '50px', width: '700px', height: '50px', marginLeft: '15%'}}>
                    <div>
                        <h2 style={{transform: 'translate(0%, -100%)'}}>View Devices</h2>
                        
                    </div>
                </div>

                
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th style={{textAlign: 'center'}}>Project ID</th>
                            <th style={{textAlign: 'center'}}>Device Name</th>
                            <th style={{textAlign: 'center'}}>RAM</th>
                            <th style={{textAlign: 'center'}}>Processor</th>
                            <th style={{textAlign: 'center'}}>Start</th>
                            <th style={{textAlign: 'center'}}>Stop</th>
                            <th style={{textAlign: 'center'}}>Status</th>
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
            </div>
        );
    }
}

export default Scripts;