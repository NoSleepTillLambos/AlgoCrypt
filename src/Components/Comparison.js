import React, { useEffect, useState } from 'react'
import axios from 'axios';
import 'chart.js/auto';
import {Bar , Pie, Doughnut, Bubble, PolarArea} from 'react-chartjs-2';
import { Chart as ChartJS, BarElement } from 'chart.js';
import "../CSS/Comp.css"


ChartJS.register (
  BarElement
)



// Bar chart
const Comparison = () => {

  const [marketCap, setMarketCap] = useState({});
  

  let marketC = [];
  let percentChange = [];
  let totalSupply = [];

  axios.get("https://api.coinlore.net/api/tickers/")
  .then(res => {
    for(const dataObj of res.data.data){
      marketC.push(parseInt(dataObj.market_cap_usd))
      
      
    }
  },[])
  
  axios.get(' https://api.coinlore.net/api/tickers/?start=0&limit=5')
  .then(answer => {
    for (const dataObj of answer.data.data){
      percentChange.push(parseInt(dataObj.percent_change_7d))
      
    }

  })
  
  
  
  
 var data =  {
  labels: ['BTC', 'ETH', 'USDT', 'BNB', 'LUNA', 'DOT'],
  datasets: [{
      label: 'Market Cap (Billions)',
      data: marketC,
      backgroundColor: [
          '#f2a900 ',
          '#215CAF',
          '#50AF95',
          ' #F0B90B',
          '#e3e3d0',
          '#e5918f'
      ],
      
      
  }]
}


var options = {

  scales: {
      y: {
          beginAtZero: true
      }
  }
  
}


const info = {
  labels: ['BTC', 'ETH', 'USDT', 'BNB', 'LUNA',],
  datasets: [
  {
      label: 'Prices',
      data: percentChange,
      backgroundColor: [
        '#f2a900 ',
        '#215CAF',
        '#50AF95',
        ' #F0B90B',
        '#e3e3d0',
        '#e5918f'
      ],
      borderColor: [
      '#ffffff',
      '#ffffff'
      ],
      borderWidth: 0.5,
  }, 
  ],
}


  return (
    <>
      
      <div className='chart-con'>
      
        <div className='bar-chart'>
        <Bar data = {data} options = {options} 
        />
        </div>

        <div className='polar-area'>
          <h2>Price comparison</h2>
        <PolarArea data = {info}
        

        />
        </div>
      </div>

      

      <div className='doughnut'>
        <h2>Percentage change</h2>
        <div className='doughnut-con'>
          
          <Doughnut data={info} />
        </div>
        
      </div>
      
    </>
  )


}



export default Comparison