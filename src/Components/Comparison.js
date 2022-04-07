import React, { useEffect, useState } from 'react'
import axios from 'axios';
import 'chart.js/auto';
import {Bar , Line} from 'react-chartjs-2';
import { Chart as ChartJS, BarElement } from 'chart.js';
import "../CSS/Comp.css"


ChartJS.register (
  BarElement
)




// Bar chart
const Comparison = () => {

  const [marketCap, setMarketCap] = useState({});
  

  let marketC = [];


  axios.get("https://api.coinlore.net/api/tickers/")
  .then(res => {
    for(const dataObj of res.data.data){
      marketC.push(parseInt(dataObj.market_cap_usd))
    }
  },[])
  

  
 var data =  {
  labels: ['BTC', 'ETH', 'USDT', 'BNB', 'LUNA', 'DOT'],
  datasets: [{
      label: 'Market Caps (Billions)',
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


  return (
    <>
      
      <div className='bar-chart'>
      
        <div className='bar'>
        <Bar 
          data = {data}
          options = {options}
        />
        </div>
    
      </div>

      <div className='bubble-chart'>

      </div>

      <div className='doughnut'>
        
      </div>
      
    </>
  )


}



export default Comparison