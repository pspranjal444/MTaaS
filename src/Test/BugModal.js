import React, {Component} from 'react';

class BugModal extends Component{
    constructor(props){
        super(props)
        // this.state = {
        //     summary: props.summary
        // }
    }

    render(){
        return(
            <div class="modal fade" id="myModal" role="dialog">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    {/* <h3 class="modal-title">Project Name: Marketing App</h3>
                                    <h4 class="modal-title">Project ID: 123456</h4> */}
                                </div>
                                <div class="modal-body">
                                    <p><b>Summary:</b>&nbsp;&nbsp;&nbsp;&nbsp;{this.props.summary}</p>
                                    {/* <h6>Parameters to test:</h6> */}
                                    {/* <p><b>Test ID:</b>&nbsp;&nbsp;&nbsp;&nbsp;{test_id}</p>
                                    <p><b>Project ID:</b>&nbsp;&nbsp;&nbsp;&nbsp;{project_id}</p>
                                    <p><b>Reproduce Steps:</b>&nbsp;&nbsp;&nbsp;&nbsp;{reproduce_steps}</p>
                                    <p><b>Actual Results:</b>&nbsp;&nbsp;&nbsp;&nbsp;{actual_results}</p>
                                    <p><b>Expected Results:</b>&nbsp;&nbsp;&nbsp;&nbsp;{expected_results}</p>
                                    <p><b>Bug Type:</b>&nbsp;&nbsp;&nbsp;&nbsp;{bug_type}</p>
                                    <p style={{WebkitTextFillColor: colorSeverity}}><b>Bug Severity:</b>&nbsp;&nbsp;&nbsp;&nbsp;{bug_severity}</p> */}
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
        );
    }
}

export default BugModal;