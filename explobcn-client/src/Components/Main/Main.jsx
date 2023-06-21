import { Card } from "@mui/material";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LuggageIcon from '@mui/icons-material/Luggage';
import CelebrationIcon from '@mui/icons-material/Celebration';
import Map from '../Map/Map'
import { getItinerary } from "../../services/itinerary.service.js";
import "./Main.css";
import { useEffect, useState } from "react";

const Main = () => {

  const [locations, setLocations] = useState([]);
  const [mainAttraction, setMainAttraction] = useState({});

  useEffect(()=> {
    getItinerary('649211ce6d4ede812d50eb84')
    .then(({data}) => {
      console.log('REPSONE', data.attraction)
      setLocations(data.locationList)
      setMainAttraction(data.attraction)
    }) 
    .catch(err => console.log(err)) 

  }, [])
  useEffect(()=> {
    
console.log('hello', mainAttraction)
  }, [locations, mainAttraction])

  return (
    <>
    <div className="main_title">
     <h1>ExploBCN</h1>
     </div>
      <div className="main__container">
        <div className="main__container__image">
        {/* Here we import the Map component  */}
        <Map locationsList={locations} attraction={mainAttraction}/>
        <div className="button_main">
      <button className = "welcomebutton"><RestaurantIcon/> Restaurant</button>
      <button className = "welcomebutton"><LuggageIcon/> Accomodations</button>
      <button className = "welcomebutton"><CelebrationIcon/> Popular</button>
        </div>
        </div>
        <div className = "card__content">
        <Card className="main__container__card">
          <div className="card_title">
            <h2>La Sagrada Familia</h2>
            <h5>300m</h5>
          </div>
          <p className="card_description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since th
          </p>
        </Card>
        <Card className="main__container__card">
          <div className="card_title">
            <h2>Plaza Catalunya</h2>
            <h5>500m</h5>
          </div>
          <p className="card_description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since th
          </p>
        </Card>
        </div>

      </div>

    </>
  );
};

export default Main;
