import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
    const INIT_URL = "https://images.unsplash.com/photo-1572687413625-cb2c4d9c4d32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
   
    const HOT_URL ="https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL ="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=1024x1024&w=is&k=20&c=U6uwI27fEfgEAl9j_Hz848FgLRidd9Ww0kPCkc0FZB8=";
    return(
        <div className="InfoBox">
        <div className="cardContainer">
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {info.humidity>80? RAIN_URL: info.temp > 15 ? HOT_URL : COLD_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} &nbsp;
          {info.humidity>80? <ThunderstormIcon/>:
           info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2"  color= 'text.secondary' component={"span"}>
         <p>Temperature={info.temp}&deg;C</p>
         <p>Humidity={info.humidity}</p>
         <p>Min Temp={info.tempMin}&deg;C</p>
         <p>Max Temp={info.tempMax}&deg;C</p>
         <p> The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
         <p> </p>
        </Typography>
      </CardContent>
    </Card>
    </div>
      </div>
    )
}