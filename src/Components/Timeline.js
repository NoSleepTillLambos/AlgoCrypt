
import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Success', 'failed'],
    datasets: [
        {
            label: 'Success vs failed space x launches',
            data: [25,24],
            backgroundColor: ['#2b2b2b',
            'white',
            ],
            pointBackgroundColor: 'rgba(255,206,86,0.2)',
        }
        
    ]
}

const options = {
    plugins: {
        title: {
            display: true,
            text: 'Chart One: Doughnut',
            color:'white',
            font: {
                size:25
            },
            padding:{
                top:30,
                bottom:30
            },
            responsive: true,
            animation:{
            animateScale: true,
                           }
        }
    }
}


function Timeline() {
  return (
    <div className='timeline-con'>
      <h1>Timeline</h1>
      
    </div>
  )
}

export default Timeline;