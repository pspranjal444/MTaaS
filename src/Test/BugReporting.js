import React, { Component } from 'react';
import cookie from 'react-cookies';
import Dashboard from './Dashboard';
const Axios = require('axios');


class BugReporting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // email: cookie.load('email'),
            summary: '',
            testid: '',
            projectid: cookie.load('project_id'),
            testerid: cookie.load('tester_id'),
            steps: '',
            actual_results: '',
            expected_results: '',
            bug_type: '',
            bug_severity: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onClick() {
        const { summary, testid, projectid, testerid, steps, actual_results, expected_results, bug_type, bug_severity } = this.state;
        Axios.post('http://localhost:3001/createBug', { summary, testid, projectid, testerid, steps, actual_results, expected_results, bug_type, bug_severity }).then(result => {
            console.log(result);
            if (result) {
                this.setState({
                    summary: '',
                    testid: '',
                    projectid: cookie.load('project_id'),
                    testerid: cookie.load('tester_id'),
                    steps: '',
                    actual_results: '',
                    expected_results: '',
                    bug_type: '',
                    bug_severity: ''
                });
                alert('Bug Submitted Successfully');
            }
            else {
                alert('Bug could not be submitted');
            }

        });

    }

    render() {
        return (

            <div class="container">
                <Dashboard />
                <span style={{ marginLeft: '-900px' }}>
                    <a href="/mypt">My Projects</a> > <a href="/ppt">{cookie.load('project_name')}</a>
                </span>
                <br/><br/>
                <a style={{ float: 'left', marginLeft: '17px' }} href="/bugs"><button class="btn btn-danger"><span class="glyphicon glyphicon-chevron-left"></span> Back</button></a><br /><br /><br />
                <div class="jumbotron" style={{ width: '700px', height: '1200px', marginLeft: '15%' }}>
                    <div style={{ marginLeft: '-375px' }}><h2><i class='fas fa-spider'></i>&nbsp;&nbsp;Submit a Bug</h2></div>

                    <br />
                    <div class="form-group">
                        <label for="usr" class="pull-left">Summary:</label>
                        <textarea type="text" rows="5" class="form-control" name="summary" onChange={this.onChange} id="summary" />
                    </div>
                    <div class="form-group">
                        <label for="usr" class="pull-left">Test ID:</label>
                        <input type="text" class="form-control" name="testid" value={cookie.load('tester_id')} onChange={this.onChange} id="textid" />
                    </div>
                    <div class="form-group">
                        <label for="usr" class="pull-left">Project ID:</label>
                        <input type="text" class="form-control" name="projectid" value={cookie.load('project_id')} onChange={this.onChange} id="projectid" />
                    </div>
                    <div class="form-group">
                        <label for="usr" class="pull-left">What did you do? (steps to reproduce)</label>
                        <textarea type="text" rows="7" class="form-control" onChange={this.onChange} name="steps" id="steps" />
                    </div>
                    <div class="form-group">
                        <label for="usr" class="pull-left">What happened? (actual results)</label>
                        <textarea type="text" rows="7" class="form-control" onChange={this.onChange} name="actual_results" id="actual_results" />
                    </div>
                    <div class="form-group">
                        <label for="usr" class="pull-left">What should have happened? (expected results)</label>
                        <textarea type="text" rows="7" class="form-control" onChange={this.onChange} name="expected_results" id="expected_results" />
                    </div>
                    <div class="form-group">
                        <label for="usr" class="pull-left">Bug Type:</label>
                        <label class="radio-inline"><input type="radio" onChange={this.onChange} name="bug_type" value="detect" id="bug_type" />This is a detect report</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <label class="radio-inline"><input type="radio" onChange={this.onChange} name="bug_type" value="enhance" id="bug_type" />This is a request for enhancement</label>
                    </div>
                    <div class="form-group">
                        <label for="usr" class="pull-left">Bug Severity:</label>
                        <label class="radio-inline"><input type="radio" onChange={this.onChange} name="bug_severity" id="bug_severity" value="low" />Low</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <label class="radio-inline"><input type="radio" onChange={this.onChange} name="bug_severity" id="bug_severity" value="mid" />Medium</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <label class="radio-inline"><input type="radio" onChange={this.onChange} name="bug_severity" id="bug_severity" value="high" />High</label>
                    </div>

                    <button type="button" class="btn btn-success" onClick={this.onClick}>Submit</button>

                    <br /><br />

                </div>
            </div>

        );
    }
}

export default BugReporting;
