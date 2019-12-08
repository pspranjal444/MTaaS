import React, {Component} from 'react';
import ReactApexChart from 'react-apexcharts';

var colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8'];
    
    class BarChart extends Component {
      
      constructor(props) {
        super(props);

        this.state = {
          options: {
            chart: {
              events: {
                click: function (chart, w, e) {
                  console.log(chart, w, e)
                }
              },
            },
            colors: colors,
            plotOptions: {
              bar: {
                columnWidth: '45%',
                distributed: true
              }
            },
            dataLabels: {
              enabled: false,
            },

            title: {
                text: "Number of Testers",
            },
            xaxis: {
              categories: ['Shopping App', 'Gaming App', 'Fashion App', 'Product Comparison App', 'Medical App'],
              labels: {
                style: {
                  colors: colors,
                  fontSize: '14px'
                }
              }
            }
          },
          series: [{
            data: [21, 22, 10, 28, 16]
          }],
        }
      }

      render() {
        return (
          

          <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height="300" width="600"/>
          </div>
  

        );
      }
    }

    export default BarChart;