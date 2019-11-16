import React, {Component} from 'react';
import cookie from 'react-cookies';
import Dashboard from './Dashboard';
const Axios = require('axios');


class BugReporting extends Component {
    constructor(props){
        super(props);
        this.state = {
            // email: cookie.load('email'),
            summary: '',
            testid: '',
            projectid: '',
            testerid: '',
            steps: '',
            actual_results: '',
            expected_results: '',
            bug_type: '',
            bug_severity: ''
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
            console.log('Hello');
            const {summary, testid, projectid, testerid, steps, actual_results, expected_results, bug_type, bug_severity} = this.state;
            Axios.post('http://localhost:3001/createBug', {summary, testid, projectid, testerid, steps, actual_results, expected_results, bug_type, bug_severity}).then(result=>{
                console.log(result);
                if(result){
                    this.setState({
                        summary: '',
                        testid: '',
                        projectid: '',
                        testerid: '',
                        steps: '',
                        actual_results: '',
                        expected_results: '',
                        bug_type: '',
                        bug_severity: ''
                    });
                    alert('Bug Submitted Successfully');
                }
                else{
                    alert('Bug could not be submitted');
                }
                
            });
            
    }

    render(){
        return(
            
                <div class="container">
                    <Dashboard/>
                    <div class="jumbotron" style={{width: '700px', height: '1200px', marginLeft: '15%'}}>
                        <div style={{marginLeft: '-375px'}}><h2><i class='fas fa-spider'></i>&nbsp;&nbsp;Enter a Bug</h2></div>
                        
                        <br/>
                        <div class="form-group">
                            <label for="usr" class="pull-left">Summary:</label>
                            <textarea type="text" rows="5" class="form-control" name="summary" onChange={this.onChange} id="summary"/>
                        </div>
                        <div class="form-group">
                            <label for="usr" class="pull-left">Test ID:</label>
                            <input type="text" class="form-control" name="testid" onChange={this.onChange} id="textid"/>
                        </div>
                        <div class="form-group">
                            <label for="usr" class="pull-left">Project ID:</label>
                            <input type="text" class="form-control" name="projectid" onChange={this.onChange} id="projectid"/>
                        </div>
                        <div class="form-group">
                            <label for="usr" class="pull-left">Tester ID:</label>
                            <input type="text" class="form-control" name="testerid" onChange={this.onChange} id="testerid"/>
                        </div>
                        <div class="form-group">
                            <label for="usr" class="pull-left">What did you do? (steps to reproduce)</label>
                            <textarea type="text" rows="7" class="form-control" onChange={this.onChange} name="steps" id="steps"/>
                        </div>
                        <div class="form-group">
                            <label for="usr" class="pull-left">What happened? (actual results)</label>
                            <textarea type="text" rows="7" class="form-control" onChange={this.onChange} name="actual_results" id="actual_results"/>
                        </div>
                        <div class="form-group">
                            <label for="usr" class="pull-left">What should have happened? (expected results)</label>
                            <textarea type="text" rows="7" class="form-control" onChange={this.onChange} name="expected_results" id="expected_results"/>
                        </div>
                        <div class="form-group">
                            <label for="usr" class="pull-left">Bug Type:</label>
                            <label class="radio-inline"><input type="radio" onChange={this.onChange} name="bug_type" value="detect" id="bug_type"/>This is a detect report</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <label class="radio-inline"><input type="radio" onChange={this.onChange} name="bug_type" value="enhance" id="bug_type"/>This is a request for enhancement</label>
                        </div>
                        <div class="form-group">
                            <label for="usr" class="pull-left">Bug Severity:</label>
                            <label class="radio-inline"><input type="radio" onChange={this.onChange} name="bug_severity" id="bug_severity" value="low"/>Low</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <label class="radio-inline"><input type="radio" onChange={this.onChange} name="bug_severity" id="bug_severity" value="mid"/>Medium</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <label class="radio-inline"><input type="radio" onChange={this.onChange} name="bug_severity" id="bug_severity" value="high"/>High</label>
                        </div>
                        
                        <button type="button" class="btn btn-success" onClick={this.onClick}>Submit</button>

                        <br/><br/>
                        
                    </div>
                </div>
            
        );
    }
}

export default BugReporting;
