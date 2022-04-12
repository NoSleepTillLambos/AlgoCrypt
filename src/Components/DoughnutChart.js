import React from 'react'
import {Bar , Line, Doughnut} from 'react-chartjs-2';
import { Chart as ChartJS, BarElement } from 'chart.js';



const data = {
    Labels: ["green", "orange", "silver" , "purple"],
    datasets: [{
      data: [12,19,4,5]
    }]
};


function DoughnutChart() {
  return (
    <div>
        <Doughnut/>
    </div>
  )
}

export default DoughnutChart