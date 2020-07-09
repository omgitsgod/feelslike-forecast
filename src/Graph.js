import React, { useRef, useEffect } from 'react';
import './css/Graph.css';
import Chart from 'chart.js';


function Graph(props) {

  const chartRef = useRef(null);
  const { selected, data, label, type, x } = props;

  useEffect(()=>{

    const myChartRef = chartRef.current.getContext('2d');
    const pointBackgroundColors = [];
    const radiusArr = [];
    const chart = new Chart(myChartRef, {
      type: type,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              fontColor: 'white'
            },
          }],
          xAxes: [{
            ticks: {
              fontColor: 'white'
            },
          }]
        },
        legend: {
          labels: {
            fontColor: 'white'
          }
        },
      },
      data: {
        labels: x,
        datasets: [{
          label: label,
          fontColor: 'white',
          data: data,
          borderColor: '#61dafb',
          backgroundColor: pointBackgroundColors,
          radius: radiusArr,
          pointHoverRadius: 10,
          pointBackgroundColor: pointBackgroundColors,
          fill: false,
        }]
      }
    });

    for (let i = 0; i < data.length; i++) {
      if (i === selected) {
          pointBackgroundColors.push('#61dafb');
          radiusArr.push(5);
      } else {
          pointBackgroundColors.push('#25393e');
          radiusArr.push(2);
      }
    }

    chart.update();
}, [selected, data, label, type, x]);


  return (
    <div>
      <canvas
        id='myChart'
        ref={chartRef}
      />
    </div>
  );
}

export default Graph;
