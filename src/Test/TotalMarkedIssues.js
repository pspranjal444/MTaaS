import React from 'react';
import ReactApexChart from 'react-apexcharts';

class LineChart extends React.Component {
      
    constructor(props) {
      super(props);

      this.state = {
        options: {
          chart: {
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                text: 'Total Marked Issues',
                align: 'left'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            }
        },
        series: [{
            name: "Bugs",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
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