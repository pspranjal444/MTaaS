import React, {Component} from 'react';
import ReactApexChart from 'react-apexcharts';

class BarChart extends React.Component {
      
    constructor(props) {
      super(props);

      this.state = {
        options: {
          chart: {
            stacked: true,
            toolbar: {
              show: false
            },
            zoom: {
              enabled: true
            }
          },
          legend: {
              show: false
          },
          title: {
            text: "Modified Tests"
          },
          responsive: [{
            breakpoint: 480,
            options: {
              legend: {
                show: false,
              }
            }
          }],
          plotOptions: {
            bar: {
              horizontal: false,
            },
          },

          xaxis: {
            type: 'datetime',
            categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
              '01/05/2011 GMT', '01/06/2011 GMT'
            ],
          },
          
          fill: {
            opacity: 1
          }
        },
        series: [{
          name: 'PROJECT 1',
          data: [44, 55, 41, 67, 22, 43],
        }, {
          name: 'PROJECT 2',
          data: [13, 23, 20, 8, 13, 27]
        }, {
          name: 'PROJECT 3',
          data: [11, 17, 15, 15, 21, 14]
        }, {
          name: 'PROJECT 4',
          data: [21, 7, 25, 13, 22, 8]
        }],
      }
    }

    render() {
      return (
        

        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height="180" width="300px"/>
        </div>


      );
    }
  }

  export default BarChart;