import React, {Component} from 'react';
import cookie from 'react-cookies';
import Dashboard from './Dashboard';
const Axios = require('axios');


class CreateDevice extends Component {
    constructor(props){
        super(props);
        this.state = {
            // email: cookie.load('email'),
            project_id: '',
            tester_id: '',
            device_name: '',
            ram: '',
            processor: '',
            status: false
        }
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onClick(){
            const {project_id, tester_id, device_name, ram, processor, status} = this.state;
            console.log(this.state.processor);
            Axios.post('http://localhost:3001/createDevice', {project_id, tester_id, device_name, ram, processor, status}).then(result=>{
                console.log(result);
                if(result){
                    this.setState({
                        project_id: '',
                        tester_id: '',
                        device_name: '',
                        ram: '',
                        processor: '',
                        status: false
                    });
                    alert('Device Created Successfully');
                }
                else{
                    alert('Error creating device');
                }
                
            });
            
    }

    render(){
        return(
            
                <div class="container">
                    <Dashboard/>
                    <div class="jumbotron" style={{width: '700px', height: '500px', marginLeft: '15%'}}>
                        <div style={{marginLeft: '-375px'}}><h2>&nbsp;&nbsp;Create a Device</h2></div>
                        
                        <br/>
                        
                        <div class="form-group">
                            <label for="usr" class="pull-left">Project ID:</label>
                            <input type="text" class="form-control" name="project_id" onChange={this.onChange} id="project_id"/>
                        </div>
                        <div class="form-group">
                            <label for="usr" class="pull-left">Tester ID:</label>
                            <input type="text" class="form-control" name="tester_id" onChange={this.onChange} id="tester_id"/>
                        </div>

                        <div class="form-group">
                            <label for="usr" class="pull-left">Device Name:</label>
                            <label class="radio-inline"><input type="radio" onChange={this.onChange} name="device_name" value="Samsung" id="device_name"/>Samsung</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <label class="radio-inline"><input type="radio" onChange={this.onChange} name="device_name" value="Google Pixel" id="device_name"/>Google Pixel</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <label class="radio-inline"><input type="radio" onChange={this.onChange} name="device_name" value="Lenovo" id="device_name"/>Lenovo</label>
                        </div>

                        <div class="form-group">
                            <label for="usr" class="pull-left">RAM:</label>
                            <label class="radio-inline"><input type="radio" onChange={this.onChange} name="ram" value="2 GB" id="ram"/>2 GB</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <label class="radio-inline"><input type="radio" onChange={this.onChange} name="ram" value="4 GB" id="ram"/>4 GB</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <label class="radio-inline"><input type="radio" onChange={this.onChange} name="ram" value="8 GB" id="ram"/>8 GB</label>
                        </div>

                        <div class="form-group">
                            <label for="usr" class="pull-left">Processor:</label>
                            <label class="radio-inline"><input type="radio" onChange={this.onChange} name="processor" value="1 GHz" id="processor"/>1 GHz</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <label class="radio-inline"><input type="radio" onChange={this.onChange} name="processor" value="2 GHz" id="processor"/>2 GHz</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <label class="radio-inline"><input type="radio" onChange={this.onChange} name="processor" value="3 GHz" id="processor"/>3 GHz</label>
                        </div>
                        <br/>
                        <button type="button" class="btn btn-success" onClick={this.onClick}>Submit</button>

                        
                        
                    </div>
                </div>
            
        );
    }
}

export default CreateDevice;
