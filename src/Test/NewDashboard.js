import React, {Component} from 'react';
import Dashboard from './Dashboard';
import ReactApexChart from 'react-apexcharts'

import { SSL_OP_COOKIE_EXCHANGE } from 'constants';
import cookie from 'react-cookies';
import { FaUserEdit ,FaFolder} from "react-icons/fa";
import {Link} from 'react-router-dom';
import Axios from 'axios';

class NewDashboard extends Component {
    constructor(){
        super();

        this.state = {
            project_count: '',
            bugs_count: ''
        }
    }

    componentDidMount(){
        const tester_id = cookie.load('tester_id');
        Axios.get('http://localhost:3001/getAllProjects').then(result=>{
            console.log(result);
            console.log('Hello')
            console.log(result.data.length);
            this.setState({
                project_count: result.data.length
            })
        })

        Axios.get('http://localhost:3001/getBugsList').then(result=>{
            console.log(result);
            console.log('Hello')
            console.log(result.data.length);
            this.setState({
                bugs_count: result.data.length
            })
        })

        // Axios.get('http://localhost:3001/getTesters').then(result=>{
        //     console.log(result);
        //     console.log('Hello')
        //     console.log(result.data.length);
        //     this.setState({
        //         tester_count: result.data.length
        //     })
        // })
    }

    render(){
        var manager_id = cookie.load('manager_id')
        return (
            <div class="container">
                <Dashboard/>
                <br/><br/>
                <div className="col-md-4">
                            <Link to="/mypt"> 
                                <div className="card_outer">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="color_background">
                                                <span className="icons_size">   < FaFolder /></span>
                                            </div>
                                        </div>

                                        <div className="col-md-8">
                                            <h3 className="center top_10">Projects ({this.state.project_count})</h3>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                </div>
                <div className="col-md-4">
                            <Link to="#"> 
                                <div className="card_outer">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="color_background">
                                                <span className="icons_size">  <i class='fas fa-spider'></i></span>
                                            </div>
                                        </div>

                                        <div className="col-md-8">
                                            <h3 className="center top_10"> Bugs ({this.state.bugs_count})</h3>
                                         </div>
                                    </div>
                                </div>
                                </Link>
                </div>

                {/* <div className="col-md-4">
                            <Link to="#"> 
                                <div className="card_outer">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="color_background">
                                                <span className="icons_size">   < FaFolder /></span>
                                            </div>
                                        </div>

                                        <div className="col-md-8">
                                            <h3 className="center top_10">Notifications</h3>
                                         </div>
                                    </div>
                                </div>
                                </Link>
                </div> */}
            </div>
        )
    }
}

export default NewDashboard;