import React, {Component} from 'react';
import ReactApexChart from 'react-apexcharts';

class PieChart extends Component {
   
    constructor(props) {
      super(props);

      this.state = {
        options: {
          labels: ['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5'],
          title: {
              text: "No of Executions"
          },
          legend: {
              show: false
          },
          responsive: [{
            breakpoint: 300,
            options: {
              chart: {
                width: 100
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
        series: [10, 20, 5, 65, 15],
      }
    }

    render() {
      return (
        

        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width="190" height="190"/>
        </div>


      );
    }
  }

  export default PieChart;