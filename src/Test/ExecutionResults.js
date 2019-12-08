import React from 'react';
import ReactApexChart from 'react-apexcharts';

class BarChart extends React.Component {
      
    constructor(props) {
      super(props);

      this.state = {
        options: {
          chart: {
            stacked: true
          },
          colors: ['#008FFB', '#FF4560'],
          plotOptions: {
            bar: {
              horizontal: true,
              barHeight: '80%',

            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: 1,
            colors: ["#fff"]
          },

          grid: {
            xaxis: {
              showLines: false
            }
          },
          yaxis: {
            min: -5,
            max: 5,
            title: {
              // text: 'Age',
            },
          },
          tooltip: {
            shared: false,
            x: {
              formatter: function (val) {
                return val
              }
            },
            y: {
              formatter: function (val) {
                return Math.abs(val) + "%"
              }
            }
          },
          title: {
            text: 'Execution Results'
          },
          xaxis: {
            categories: ['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5', 'Project 6'],
            title: {
              text: 'Percent'
            },
            labels: {
              formatter: function (val) {
                return Math.abs(Math.round(val)) + "%"
              }
            }
          }
        },
        series: [
          {
            name: 'Passed',
            data: [0.4, 0.65, 0.76, 0.88, 1.5, 2.1]
          },
          {
            name: 'Failed',
            data: [-0.8, -1.05, -1.06, -1.18, -1.4, -2.2]
          }
        ],
      }
    }

    render() {
      return (
        

        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height="220" width="250"/>
        </div>


      );
    }
  }

  export default BarChart;