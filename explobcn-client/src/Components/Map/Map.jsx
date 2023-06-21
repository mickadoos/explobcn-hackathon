import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import './Map.css'
// import L from "leaflet";

// import { getItinerary } from '../../services/itinerary.service';


const Map = ({locationsList, attraction}) => {
  const [locationsMap, setLocationsMap] = useState([])
  const [mainAttractionMap, setMainAttractionMap] = useState({});

  useEffect(() => {
    console.log('map locationlist------', attraction)
    setLocationsMap(locationsList)
    setMainAttractionMap(attraction)
  }, [locationsList, attraction])


  //   useEffect(() => {
  //   console.log('map locationlist------',   mainAttractionMap.coordinates.lat)
  
  // }, [mainAttractionMap])
    const position = [41.3790365679, 2.1818329606];
    // const position2 = [54, -1];

    // const customIcon = L.icon({
    //   iconUrl: "../../assets/map-icon.png",
    //   iconSize: [32, 32],
    // });
    return (
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={true}
        style={{ minHeight: "50vh", minWidth: "50vw" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {mainAttractionMap.coordinates &&  <Marker className="marker" position={[mainAttractionMap.coordinates.lat, mainAttractionMap.coordinates.lng]}>
          <Popup>
           {mainAttractionMap.coordinates.lat}, {mainAttractionMap.coordinates.lng}  <br /> {mainAttractionMap.name}
          </Popup>
        </Marker>}
       
        {locationsMap.map(location => {
          console.log(location.coordinates.lat, location.coordinates.lng);
         return ( <Marker key={location._id} position={[location.coordinates.lat, location.coordinates.lng]}>
          <Popup>
            {location.coordinates.lat}, {location.coordinates.lat}  <br /> {location.name} .
          </Popup>
        </Marker> )
        })}
   
      </MapContainer>
    );
};

export default Map;
