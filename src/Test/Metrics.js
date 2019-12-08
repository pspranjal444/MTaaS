import React, {Component} from 'react';
import Dashboard from './Dashboard';
import cookie from 'react-cookies';
import PieChart from './NumberOfTests';
import BarChart from './BarChart';
import LineChart from './LineChart';
import NumberofExecutions from './NumberofExecutions';
import ExecutionResults from './ExecutionResults';
import TotalMarkedIssues from './TotalMarkedIssues';

class Metrics extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log('MY ID', cookie.load('tester_id'))
        return(
            <div class="container">
                
                <Dashboard/>
                {/* <div style={{width: '100px', height: '60px', boxShadow: '3px 3px #888888'}}>

                </div> */}
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div style={{width: '250px', height: "200px", boxShadow: '2px 2px 14px', padding: '20px', marginTop: '40px'}}>
                        <h3 style={{marginTop: '50px', textDecoration: 'bold'}}>Number of Tests</h3>
                        <h4 style={{fontSize: '25px', WebkitTextFillColor: '#82CAFF'}}>32</h4>
                    </div>
                    {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                    <div style={{display: 'flex', width: '800px', height: "200px", boxShadow: '2px 2px 14px', padding: '20px', marginTop: '40px', marginLeft: '60px'}}>
                        <PieChart/>
                        <BarChart/>
                        <LineChart/>
                    </div>                             
                </div>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div>
                        <div style={{width: '250px', height: "100px", boxShadow: '2px 2px 14px', padding: '10px', marginTop: '40px'}}>
                            <h4 style={{fontSize: '20px', textDecoration: 'bold'}}>Test Runs</h4>
                            <h4 style={{fontSize: '20px', WebkitTextFillColor: '#82CAFF'}}>109</h4>
                        </div>
                        <div style={{width: '250px', height: "100px", boxShadow: '2px 2px 14px', padding: '10px', marginTop: '40px'}}>
                            <h4 style={{fontSize: '20px', textDecoration: 'bold'}}>Execution Time</h4>
                            <h4 style={{fontSize: '20px', WebkitTextFillColor: '#82CAFF'}}>45:15 Hrs</h4>
                        </div>
                    </div>
                    <div style={{display: 'flex', width: '800px', height: "240px", boxShadow: '2px 2px 14px', padding: '20px', marginTop: '40px', marginLeft: '60px', padding: '20px'}}>
                        <NumberofExecutions/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <ExecutionResults/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <TotalMarkedIssues/>
                    </div>
                </div>
                
                {/* <img src={require('./dashboard.png')} style={{width: '100%', marginLeft: '15px', marginTop: '40px'}}></img> */}
            </div>
        );
    }
}

export default Metrics;