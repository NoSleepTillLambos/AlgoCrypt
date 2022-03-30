import React from 'react'
import { makeStyles} from "@material-ui/core"
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    carousel: {
        height: "50%",
        display: "flex",
        alignItems: "center",
    },

}));


function Carousel() {
    const classes = useStyles();

    const getCoins =async () => {
        const {data} = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`)
    }
  return (
    <div>
        <h1 className={classes.carousel}>Carousel</h1>
    </div>
  )
}

export default Carousel