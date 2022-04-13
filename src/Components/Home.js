import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "../CSS/Home.css"
import {Link} from 'react-router-dom';



function Home() {

  

  const [state, setState] = useState({
    marketC: ''
  })


  useEffect( () => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get('https://api.coinlore.net/api/global/');
    console.log(res.data[0].total_mcap)
    setState({
      ...state, 
      marketC: Math.round(res.data[0].total_mcap) 
    });
  }
  
  

  

  return (
    <>

      <div className='info-home'>
        <h1>ALGO CRYPT</h1>
        <h4>The home of all things crypto!</h4>
        <p id='description'>At algo crypt we offer everything one may need for their crypto journey from price 
        analysis, to tracking and general crypto updates. </p>
        <p>(Donate below)</p>
        <img src='./btcQR.png' alt='bitcoin QR code' id='qr'></img>
        
      </div>
      <div className='info-num'>
        <h3>Total Crypto Market cap (Billions):</h3>
        <h4>$ {state.marketC}</h4>
      </div>
      <div className='stats-home'>
        
        <Link to={{  pathname: "https://icons8.com/illustrations/author/eEbrZFlkyZbD" }} target="_blank" ><img src='./btc1.png' id='btc-img'></img></Link>
      </div>
      
    </>
  )
}

export default Home
