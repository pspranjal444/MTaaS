import React, {Component} from 'react';
import cookie from 'react-cookies';
import Dashboard from './Dashboard';

class Bugs extends Component{
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
                    <h2 style={{transform: 'translate(0%, -100%)'}}>View Bugs</h2>
                </div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th style={{textAlign: 'center'}}>Bug ID</th> 
                            <th style={{textAlign: 'center'}}>Bug Name</th>
                            <th style={{textAlign: 'center'}}>Project ID</th>
                            <th style={{textAlign: 'center'}}>Test ID</th>
                            <th style={{textAlign: 'center'}}>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{textAlign: 'center'}}>BG123</td>
                            <td style={{textAlign: 'center'}}>Text Field Bug</td>
                            <td style={{textAlign: 'center'}}>434364</td>
                            <td style={{textAlign: 'center'}}>5678</td>
                            <td style={{textAlign: 'center'}}><a href="#">View</a></td>
                        </tr>
                        <tr>
                            <td style={{textAlign: 'center'}}>BG375</td>
                            <td style={{textAlign: 'center'}}>Button Bug</td>
                            <td style={{textAlign: 'center'}}>1234436</td>
                            <td style={{textAlign: 'center'}}>5678</td>
                            <td style={{textAlign: 'center'}}><a href="#">View</a></td>
                        </tr>
                        <tr>
                            <td style={{textAlign: 'center'}}>BG645</td>
                            <td style={{textAlign: 'center'}}>Toast Bug</td>
                            <td style={{textAlign: 'center'}}>35453</td>
                            <td style={{textAlign: 'center'}}>5678</td>
                            <td style={{textAlign: 'center'}}><a href="#">View</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Bugs;