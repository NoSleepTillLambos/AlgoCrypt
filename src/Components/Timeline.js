import React from "react";
import 'chart.js/auto';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {useState, useRef, useEffect} from 'react';
import axios from "axios";
import { Line } from "react-chartjs-2";
import "../CSS/Time.css"

ChartJS.register(ArcElement, Tooltip, Legend);


const DynamicChart = () => {

  const [data,setData] = useState([]);
    
  const eth = [];
  const btc = [];
  const bnb = [];


  useEffect(() => {
    axios.get('https://api.coinlore.net/api/tickers/?start=0&limit=5')
    .then((res)=> {
      for(const dataObj of res.data.data)
      eth.push(parseInt(dataObj.tsupply))
    })
    
  },[])


  
    

    return (
    <div className='timeline-con'>
      <h2>TOTAL SUPPLY</h2>
      <div className='line-chart'>
        
        <Line
            data={{
                labels: ['BTC', 'ETH', 'USDT', 'BNB', 'LUNA'],
                datasets: [{
                    tension: 0.5,
                    label: 'Top 5 by market cap',
                    data: eth,
                    fill: true,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },
            
            ],
            }} 
            height={400} 
            width={600} 
            options={{maintainAspectRatio: false,}}
            />
      </div>
      
    </div>
  )
}

export default DynamicChart;