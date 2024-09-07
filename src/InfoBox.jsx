import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import LightModeIcon from '@mui/icons-material/LightMode';
import CloudIcon from '@mui/icons-material/Cloud';

function InfoBox({info}) {
  const COLD_URL="https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const HOT_URL ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH8_bZxymTAM8X5roRUVPr08LKzoOMVPecW5t5S_NnBrB16Es6QOaHbDg03N6HqBmokwg&usqp=CAU"
  const RAINY_URL ="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs="
  const MILD_URL ="https://media.cna.al/cna.al/media3/-640-0-1718341790xmoti-528.jpg"
  return (
    <center className='InfoBox'>
      <h1 className='info'>Weather Details</h1>
      <Card sx={{ maxWidth: 340  }}>
      <CardMedia
        component="img"
        alt="weather"
        height="155"
         image={ info.humidity>80?RAINY_URL:info.temp>31? HOT_URL:info.temp<15?COLD_URL:MILD_URL}
       
      />
      <CardContent>
        <Typography  className='city'gutterBottom variant="h5" component="div">
          {info.city}{info.humidity>80?<ThunderstormIcon/>:info.temp>31?<LightModeIcon/>:info.temp<15?<AcUnitIcon/>:<CloudIcon/>}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
         <>Temperature : <b>{info.temp}&deg;C</b></> <br />
         <>RealFeel : {info.feelsLike}&deg;C &nbsp;<b>|</b>&nbsp; Humidity : {info.humidity}%</><br /> 
         <>Min Temp : {info.tempMin}&deg;C &nbsp;<b>|</b>&nbsp; Max Temp : {info.tempMax}&deg;C</> <br />
         <>The weather describe as <b>{info.weather}.</b></>

        </Typography>
      </CardContent>
    </Card>
    </center>
  )
}

export default InfoBox