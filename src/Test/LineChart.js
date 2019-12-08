import React, {Component} from 'react';
import ReactApexChart from 'react-apexcharts';


class LineChart extends React.Component {
      
    constructor(props) {
      super(props);

      this.state = {
        options: {
          chart: {
          zoom: {
            enabled: false
          },
        },
        legend: {
            show: false
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [2, 3, 4],
          curve: 'straight',
          dashArray: [0, 8, 5]
        },

        title: {
          text: 'Work Hours',
          align: 'left'
        },
        markers: {
          size: 0,
          
          hover: {
            sizeOffset: 6
          }
        },
        xaxis: {
          categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
            '10 Jan', '11 Jan', '12 Jan'
          ],
        },
        tooltip: {
          y: [{
            title: {
              formatter: function (val) {
                return val + " (mins)"
              }
            }
          }, {
            title: {
              formatter: function (val) {
                return val + " per session"
              }
            }
          }, {
            title: {
              formatter: function (val) {
                return val;
              }
            }
          }]
        },
        grid: {
          borderColor: '#f1f1f1',
        }
        },
        series: [{
          name: "Project 1",
          data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
        },
        {
          name: "Project 2",
          data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
        },
        {
          name: 'Project 3',
          data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
        }
      ],
      }
    }

    render() {

      return (
        

        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="line" height="190" />
        </div>


      );
    }
  }

  export default LineChart;
