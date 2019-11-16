import React, {Component} from 'react';
import cookie from 'react-cookies';
import Dashboard from './Dashboard';

class Logs extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div class="container">
                <Dashboard/>
                <div class="jumbotron" style={{marginTop: '50px', width: '700px', height: '50px', marginLeft: '15%'}}>
                    <h2 style={{transform: 'translate(0%, -100%)'}}>View Logs</h2>
                </div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th style={{textAlign: 'center'}}>Log</th>
                            <th style={{textAlign: 'center'}}>Project ID</th>
                            <th style={{textAlign: 'center'}}>Test ID</th>
                            <th style={{textAlign: 'center'}}>Download</th>
                            {/* <th style={{textAlign: 'center'}}>Execute</th> */}
                            <th style={{textAlign: 'center'}}>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{textAlign: 'center'}}>Hello</td>
                            <td style={{textAlign: 'center'}}>123456</td>
                            <td style={{textAlign: 'center'}}>5678</td>
                            <td style={{textAlign: 'center'}}><a href="#">Download</a></td>
                            {/* <td style={{textAlign: 'center'}}><a href="#"><span class="glyphicon glyphicon-play"></span></a></td> */}
                            <td style={{textAlign: 'center'}}><a href="#"><span class="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        <tr>
                            <td>My Test Log</td>
                            <td>123457</td>
                            <td>5679</td>
                            <td><a href="#">Download</a></td>
                            {/* <td style={{textAlign: 'center'}}><a href="#"><span class="glyphicon glyphicon-play"></span></a></td> */}
                            <td style={{textAlign: 'center'}}><a href="#"><span class="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        <tr>
                            <td>Toast Test Logs</td>
                            <td>123458</td>
                            <td>5676</td>
                            <td><a href="#">Download</a></td>
                            {/* <td style={{textAlign: 'center'}}><a href="#"><span class="glyphicon glyphicon-play"></span></a></td> */}
                            <td style={{textAlign: 'center'}}><a href="#"><span class="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Logs;