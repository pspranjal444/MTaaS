import React, {Component} from 'react';
import cookie from 'react-cookies';

class Container extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: cookie.load('email'),
            summary: '',
            testid: '',
            projectid: ''
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <div>
                <div class="container">
                    <div class="jumbotron" style={{width: '700px', height: '1200px', marginLeft: '15%'}}>
                        <div style={{marginLeft: '-375px'}}><h2><i class='fas fa-spider'></i>&nbsp;&nbsp;Enter a Bug</h2></div>
                        
                        <br/>
                        <div class="form-group">
                            <label for="usr" class="pull-left">Summary:</label>
                            <textarea type="text" rows="5" class="form-control" id="usr"/>
                        </div>
                        <div class="form-group">
                            <label for="usr" class="pull-left">Test ID:</label>
                            <input type="text" class="form-control" id="usr"/>
                        </div>
                        <div class="form-group">
                            <label for="usr" class="pull-left">Project ID:</label>
                            <input type="text" class="form-control" id="usr"/>
                        </div>
                        <div class="form-group">
                            <label for="usr" class="pull-left">What did you do? (steps to reproduce)</label>
                            <textarea type="text" rows="7" class="form-control" id="usr"/>
                        </div>
                        <div class="form-group">
                            <label for="usr" class="pull-left">What happened? (actual results)</label>
                            <textarea type="text" rows="7" class="form-control" id="usr"/>
                        </div>
                        <div class="form-group">
                            <label for="usr" class="pull-left">What should have happened? (expected results)</label>
                            <textarea type="text" rows="7" class="form-control" id="usr"/>
                        </div>
                        <div class="form-group">
                            <label for="usr" class="pull-left">Bug Type:</label>
                            <label class="radio-inline"><input type="radio" name="optradio" value=""/>This is a detect report</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <label class="radio-inline"><input type="radio" name="optradio" value=""/>This is a request for enhancement</label>
                        </div>
                        <div class="form-group">
                            <label for="usr" class="pull-left">Bug Severity:</label>
                            <label class="radio-inline"><input type="radio" name="optradio1" value=""/>Low</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <label class="radio-inline"><input type="radio" name="optradio1" value=""/>Medium</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <label class="radio-inline"><input type="radio" name="optradio1" value=""/>High</label>
                        </div>
                        <br/><br/>
                        <button type="button" class="btn btn-success">Submit</button>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Container;
