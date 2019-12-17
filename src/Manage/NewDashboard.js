import React, {Component} from 'react';
import Dashboard from '../Manage/Dashboard';
import ReactApexChart from 'react-apexcharts'
import ResourceUsageGraph from './ResourceUsageGraph';
import TestersGraph from './TestersGraph';
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
            tester_count: ''
        }
    }

    componentDidMount(){
        const manager_id = cookie.load('manager_id');
        Axios.get('http://localhost:3001/getManagerProjects', {params: {manager_id}}).then(result=>{
            console.log(result);
            console.log('Hello')
            console.log(result.data.length);
            this.setState({
                project_count: result.data.length
            })
        })

        Axios.get('http://localhost:3001/getTesters').then(result=>{
            console.log(result);
            console.log('Hello')
            console.log(result.data.length);
            this.setState({
                tester_count: result.data.length
            })
        })

        // const {manager_id} = this.state;
        Axios.get('http://localhost:3001/getApps', {params: {manager_id}}).then(result=>{
            console.log(result);
            this.setState({
                applications_count: result.data.length
            })
        })
    }

    render(){
        var manager_id = cookie.load('manager_id')
        return (
            <div class="container">
                <Dashboard/>
                <br/><br/>
                <div className="col-md-4">
                            <Link to="/myprojects"> 
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
                            <Link to="/myTesters"> 
                                <div className="card_outer">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="color_background">
                                                <span className="icons_size">   < FaFolder /></span>
                                            </div>
                                        </div>

                                        <div className="col-md-8">
                                            <h3 className="center top_10">All Testers ({this.state.tester_count})</h3>
                                         </div>
                                    </div>
                                </div>
                                </Link>
                </div>

                <div className="col-md-4">
                            <Link to="/viewApps"> 
                                <div className="card_outer">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="color_background">
                                                <span className="icons_size">   < FaFolder /></span>
                                            </div>
                                        </div>

                                        <div className="col-md-8">
                                            <h3 className="center top_10">All Applications ({this.state.applications_count})</h3>
                                         </div>
                                    </div>
                                </div>
                                </Link>
                </div>
            </div>
        )
    }
}

export default NewDashboard;