import React, {useRef, useEffect} from 'react';
import './css/Graph.css'
import Chart from 'chart.js';

function Graph(props) {
  const chartRef = useRef(null)
  Chart.defaults.global.defaultFontColor = 'white';
  useEffect(()=>{
    const myChartRef = chartRef.current.getContext('2d');

    new Chart(myChartRef, {
      type: props.type,
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
      data: {
        labels: props.x,
        datasets: [
          {
            label: props.label,
            data: props.data,
            //borderColor: '#98B9AB',
            borderColor: '#61dafb',
            backgroundColor: '#61dafb',
            fill: false,
          }
        ]
      }
    })
  }, [])

  return (
    <div>
      <canvas
        id='myChart'
        ref={chartRef}
      />
    </div>
  )
}

export default Graph;
