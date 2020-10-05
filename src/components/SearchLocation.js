import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import axios from 'axios'

function SearchLocation(props) {
let isLocationSet = localStorage.getItem("location_name") 
 const [query, setQuery] = useState(isLocationSet)
console.log(isLocationSet)
    const getLocation = async () => {
        let res = await axios({
            "method":"GET",
            "url":"https://tripadvisor1.p.rapidapi.com/locations/search",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"tripadvisor1.p.rapidapi.com",
            "x-rapidapi-key":"49db63e008msha31d9ce23661601p1a123ajsnf699b90accc9",
            "useQueryString":true
            },"params":{
            "location_id":"1",
            "limit":"1",
            "sort":"relevance",
            "offset":"0",
            "lang":"en_US",
            "currency":"USD",
            "units":"km",
            "query": query
            }
            })
            let location_id = res.data.data[0].result_object.location_id
            localStorage.setItem("location_id", location_id)
            localStorage.setItem("location_name", query)

    }

  const onChangeGetText = (e) => {
    const value = e.target.value;
    setQuery(value)
  };

  return (
    <div>
      <input type="text" name="searchLocation" onChange={onChangeGetText} value={query}/>
      <button className="btn btn-primary" onClick={getLocation}>Search Location</button>
    </div>
  );
}

export default SearchLocation;