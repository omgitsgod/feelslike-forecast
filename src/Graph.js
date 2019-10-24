import React, {useRef, useEffect} from 'react';
import Chart from 'chart.js';

function Graph(props) {
  const chartRef = useRef(null)

  useEffect(()=>{
    const myChartRef = chartRef.current.getContext('2d');

    new Chart(myChartRef, {
      type: props.type,
      data: {
        labels: Array.from({length: props.data.length}, (x,i) => i),
        datasets: [
          {
            label: props.label,
            data: props.data,
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
