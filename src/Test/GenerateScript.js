import React, {Component} from 'react';
import Axios from 'axios';
import cookie from 'react-cookies';
import Dashboard from './Dashboard';

class GenerateScript extends Component {
    constructor(){
        super();

        this.state = {
            tester_id: cookie.load('tester_id'),
            project_id: '',
            fileLink: '',
            f_name: ''
        }

        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onClick(){
        const {tester_id, project_id} = this.state;
        Axios.post('http://localhost:3001/generateScript', {tester_id, project_id}).then(result=>{
            console.log(result.data.link);
            this.setState({
                fileLink: result.data.link,
                downloadButton: <button class="btn btn-danger" onClick={()=>{
                    window.location.href = this.state.fileLink
                }}>Download</button>
            })
        })
    }

    render(){
        return (
            <div>
                 <div class="container">
                    <Dashboard/>
                    <h2>Generate Script</h2>
                    <div class="jumbotron" style={{width: '700px', height: '400px', marginLeft: '15%'}}>
                        <div class="form-group">
                                <label for="usr" class="pull-left">Project ID:</label>
                                <input type="text" class="form-control" name="project_id" onChange={this.onChange} id="project_id" placeholder="Enter Project ID"/>
                        </div>
                        <div class="form-group">
                                <label for="usr" class="pull-left">File Name:</label>
                                <input type="text" class="form-control" name="f_name" onChange={this.onChange} id="f_name" placeholder="Enter Project ID"/>
                        </div>
                        <button type="button" class="btn btn-success" onClick={this.onClick}>Submit</button>
                        {/* {window.open(this.state.fileLink)} */}
                        <br/><br/><br/>
                        {this.state.downloadButton}
                    </div>
                </div>
            </div>
        )
    }
}

export default GenerateScript;