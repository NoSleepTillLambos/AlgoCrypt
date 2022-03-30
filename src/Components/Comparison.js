import React from 'react'
import axios from 'axios';
import 'chart.js/auto';
import {Bar , Line} from 'react-chartjs-2';



{/* AXIOS REQUEST */}
axios.get('https://api.coinlore.net/api/tickers/')
.then((response) =>{
  console.log(response);
}).catch((error) => {
  console.log(error);
})



function Comparison() {
  return (
    <div className='container'>
      <h1>Comparison page</h1>
      <Bar 
            data={{
                labels: ['New York', 'San Francisco', 'Los Angeles', 'Chicago', 'Houston'],
                datasets: [{
                    label: 'Population of Americas biggest cities (Millions)',
                    data: [8.3, 0.8, 4, 2.5, 2.3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
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
            options={{maintainAspectRatio: true,}}
          />
    </div>
  )
}

export default Comparison