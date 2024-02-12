import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import axios from "axios";

const GoogleMapp = () => {
  const [locationData, setLocationData] = useState([]);
  const [dataready, setdataready] = useState(false)
  const [viewData, setviewData] = useState(false)
  const [data, setdata] = useState([])
 useEffect(()=>{
    setTimeout(() => {
      setviewData(true)
      console.log('we can view now')
    }, 2000);
 },[dataready])

    const containerStyle = {
        width: "800px",
        height: "400px",
      };
    
      // const center = {
      //   lat: 9.05785,
      //   lng: 7.49508, // Longitude for Nigeria
      // };
      const center = {
        lat: 9.0820,
        lng: 8.6753, // Longitude for Nigeria
      };

      const locations=[
        {
            country:'Nigeria',
            state:'abuja',
            city:'wuse'
        },
        {
            country:'Nigeria',
            state:'kogi',
            city:'kabba'
        },
        {
          country:'Nigeria',
          state:'Niger',
          city:'bishop james yisa memoorial school ,kwamba ,suleja'
      },
      {
        country:'Nigeria',
        state:'sokoto',
        city:'sultan Abubakar iii international airpot'
    },
      ]
      let result=[]
      useEffect( ()=>{
        const getFacilitiesLocation = async () => {
          try{
            // locations.map(item)
            for (const location of locations) {
              const address = `${location.city}, ${location.state}, ${location.country}`;
                const geoRes =await axios.get(
                  `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
                    address
                  )}&key=AIzaSyDT9STHghZufah134eISBDF9ozIAVG5vTM`
                );
                const geoData = geoRes.data.results[0].geometry.location;
                location.lat = geoData.lat;
                location.lng = geoData.lng;
                setdata({
                  lat:geoData.lat,
                  long:geoData.lng
                })
                setLocationData(locations);
                // result.push({
                //     lat:geoData.lat,
                //     lng:geoData.lng
                // })
                console.log(geoRes.data.results[0])
                console.log(locations)
                console.log(data)
                // setdataready(true)
            }
      
          }catch(e){
            console.log(e)
          }
        }

        getFacilitiesLocation();
      },[])
     
    //   setLocationData(locations);
    //   setLoading(false);
    
  
  return (
    <div className='GoogleMap'>
        <LoadScript googleMapsApiKey={'AIzaSyDT9STHghZufah134eISBDF9ozIAVG5vTM'}>
          <GoogleMap
            mapContainerClassName="google-map"
            mapContainerStyle={containerStyle}
            center={center}
            zoom={5}
          >
            {locationData.map((facility) => (
              <Marker
                // key={facility._id}
                key={facility.city
                  }
                position={{ lat: facility.lat, lng: facility.lng }}
              />
            ))}
          </GoogleMap>
        </LoadScript>

    </div>
  )
}

export default GoogleMapp