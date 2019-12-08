import ReactApexChart from 'react-apexcharts';
import React, {Component} from 'react';

class AreaChart extends Component {
      
    constructor() {
      super();

      this.state = {
        options: {
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          title: {
            text: "Resource Usage"
          },

          xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00",
              "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00",
              "2018-09-19T06:30:00"
            ],
          },
          yaxis: {
            title: {
                text: "Percent(%)"
            }
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          }
        },
        series: [{
          name: 'CPU Usage',
          data: [3, 12, 14, 6, 18, 7, 14]
        }, {
          name: 'HDD Usage',
          data: [11, 32, 45, 32, 34, 52, 41]
        }],
      }
    }

    render() {
      return (
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="area" height="200" width="600"/>
        </div>
        )
    }
}

export default AreaChart;