import React, {Component} from 'react';
import Dashboard from '../Manage/Dashboard';
import ReactApexChart from 'react-apexcharts'
import ResourceUsageGraph from './ResourceUsageGraph';
import TestersGraph from './TestersGraph';
import { SSL_OP_COOKIE_EXCHANGE } from 'constants';
import cookie from 'react-cookies';
class MetricsManager extends Component {
    constructor(){
        super();

        this.state = {
            options: {
              chart: {
                stacked: true,
              },
              plotOptions: {
                bar: {
                  horizontal: true,
                },
  
              },
              stroke: {
                width: 1,
                colors: ['#fff']
              },
  
              title: {
                text: 'Number of Tests Performed'
              },
              xaxis: {
                  title: {
                      text: "Number of tests"
                  },
                categories: ["11/6", "11/5", "11/4", "11/3", "11/2", "11/1", "10/31"],
                labels: {
                  formatter: function (val) {
                    return val
                  }
                }
              },
              yaxis: {
                title: {
                  text: "Date"
                },
  
              },
              tooltip: {
                y: {
                  formatter: function (val) {
                    return val
                  }
                }
              },
              fill: {
                opacity: 1
  
              },
  
              legend: {
                position: 'top',
                horizontalAlign: 'left',
                offsetX: 40
              }
            },
            series: [{
              name: 'Shopping App',
              data: [44, 55, 41, 37, 22, 43, 21]
            }, {
              name: 'Gaming App',
              data: [53, 32, 33, 52, 13, 43, 32]
            }, {
              name: 'Fashion App',
              data: [12, 17, 11, 9, 15, 11, 20]
            }, {
              name: 'Product Comparison App',
              data: [9, 7, 5, 8, 6, 9, 4]
            }, {
              name: 'Medical App',
              data: [25, 12, 19, 32, 25, 24, 10]
            }],
        }
    }

    render(){
        var manager_id = cookie.load('manager_id')
        return (
            <div class="container">
                <Dashboard/>
                <h2>My Dashboard</h2>
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height="350" />
                <span style={{display: 'flex'}}> 
                    <ResourceUsageGraph/>
                    <TestersGraph/>
                </span>
                
            </div>
        )
    }
}

export default MetricsManager;