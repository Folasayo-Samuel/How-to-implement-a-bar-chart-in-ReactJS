import React, {useEffect, useRef, useState} from "react";
import Highcharts from "highcharts";
import './App.css';

function App() {
  const refContainer = useRef(null);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const chart = Highcharts.chart(refContainer.current, {
      chart: {
        type: "bar"
      }, //type of the chart
      title: {
        text: "Bar Chart Title"
      }, //title of the chart
      subtitle: {
        text: "Lorem Ipsum is simply dummy text"
      }, //subtitle of the chart
      xAxis: {
        categories: [
          'Y1',
          'Y2',
          'Y3',
          'Y4',
          'Y5'
        ], //the categories of the Y Axis
        title: {
          text: 'Y Axis Title'
        }, //the title of the Y Axis
        crossshair: true
      },
      yAxis: {
        min: 0, //minimum value of the X Axis
        title: {
          text: 'X Axis Title'
        } //the title of the X Axis
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      }, //tooltip appears when hovering over a point
      credits: {
        enabled: false
      },
      series: dataSource //set of the data
    });

    if (dataSource.length > 0) {
      chart.hideLoading();
    } else {
      chart.showLoading();
    }
  }, [dataSource]);

  useEffect(() => {
    setTimeout(() => {
      setDataSource([{
        name: 'Japan',
        data: [50, 72, 88, 92, 34 ]
      }, {
        name: 'Germany',
        data: [84, 79, 99, 94, 66]
      }, {
        name: 'London',
        data: [49, 39, 47, 40, 42]
      }, {
        name: 'Canada',
        data: [43, 34, 77, 35, 53]
        }]);
    }, 2000);
  }, []);

  return (
    <div className="App">
      <h3>Bar Chart Built With ReactJS</h3>
      <div ref={refContainer} />
    </div>
  );
}

export default App;
