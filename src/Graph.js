import React, {useRef, useEffect} from 'react';
import './css/Graph.css'
import Chart from 'chart.js';

function Graph(props) {
  const pointBackgroundColors = []
  const chartRef = useRef(null)
  Chart.defaults.global.defaultFontColor = 'white';
  useEffect(()=>{
    const myChartRef = chartRef.current.getContext('2d');

   const x = new Chart(myChartRef, {
      type: props.type,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        onClick: (e) => {console.log(e.target)}
      },
      data: {
        labels: props.x,
        datasets: [
          {
            label: props.label,
            data: props.data,
            //borderColor: '#98B9AB',
            borderColor: '#61dafb',
          //  backgroundColor: '#61dafb',
            pointHoverRadius: 10,
            pointBackgroundColor: pointBackgroundColors,
            fill: true,
          }
        ]
      }
    })
  console.log(x.config.data);
  for (let i = 0; i < x.data.datasets[0].data.length; i++) {
    if (i === props.selected) {
        pointBackgroundColors.push("red");
    } else {
        pointBackgroundColors.push("#61dafb");
    }
  }
  console.log(pointBackgroundColors);
//  x.config.data.datasets[0]['pointBackgroundColor'] = 'red';
  x.update()
}, [props.selected])


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
