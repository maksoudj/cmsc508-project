import {useRouter} from 'next/router'
import axios from "axios";
import SearchBar from '../Components/searchBar'
import classes from '../styles/Top.module.css'
import { useState, useEffect } from 'react';
import Link from 'next/link'
import CreateParkForm from '../Components/InputForm'

function Parks(props) {
  console.log(props);
  const router = useRouter();

  function ChangePark (park){
    router.push('/' + park.value)
  }

     async function ChangeLocation (location){
      if (location != null){
      console.log(location)
      const {data: parks} = await axios.get(
          "http://localhost:3014/api/" + location
        )
        await new Promise(resolve => setTimeout(resolve, 100));
        console.log(parks)
        const parksLinkList = parks.park.map(park => (
          <li key={park.park_code}>
            <Link href= {`http://localhost:3014/${park.park_code}`}>{park.park_full_name}</Link>
          </li>
        ));
        const parksListHtml = <ul>{parksLinkList}</ul>;
        setParkList(parksListHtml)
        return parks
      }
  }
  const [park] = useState();
  const [ParkList,setParkList] = useState(null)
  const [location] = useState();
  const handleClick = () => {
    router.push('/articles')
  }

  return (
    <div>
    <h1>
    <div className= {classes.search}>
    <SearchBar id = 'park_search' options = {props.parks.result} label = 'Search using park name' value={park} onChange = {(event,park) => ChangePark(park)}/>
    <p1>Total Stamps: {props.parks.numOfStamps[0]["total"]}</p1>
    <SearchBar id = 'location_search' options = {props.parks.locations} label = 'Search for parks based on location' value = {location} onChange =  {(event,location) => {if (location != null) ChangeLocation(location.value)}}/>
    </div>
    </h1>
    {ParkList}
    <div>
    <CreateParkForm />
    </div>
    <button onClick={handleClick}>  
    Articles
    </button>
    </div>
  )
  
}


export async function getStaticProps(){
  const {data: parks} = await axios.get(
    "http://localhost:3014/api/parks"
  );
  return {
    props: {
      parks,
    },
    revalidate: 1,
  };
}

export default Parks;
