import axios from "axios";
import { pool } from "config/db";

function park_details(props) {
        //                
      try{
        console.log(props)
    let activities = props.result.activities.map(a => <li key={a.activity_name.toString()}>{a.activity_name}</li>);     
    let campgrounds = props.result.campgrounds.map(({name, description, longitude, latitude}) =><li key = {name}> <h3>{name}</h3><ul><li key = {description}>{description}</li><li key = {longitude}>Longitude: {longitude} Latitude: {latitude}</li></ul></li>)
    let campgroundsList = campgrounds.map((current,index) => <ul key = {index}>{current}</ul>)

     

   
    return (
      <div>
        <h1>{props.result.park[0].park_full_name}</h1>
        <h2>{props.result.park[0].park_location}, Number of Stamps: {props.result.number_of_stamps[0].number_of_stamps}</h2>
        <p>{props.result.park[0].park_description}</p>
        <h2>Actvities available at this park:</h2>
        <ul>{activities}</ul>
        <h2>Campgrounds available at this park:</h2>
        {campgroundsList}
      </div>
    );
  }
  catch(e){
    console.log(e); 
  }
  }
  

 export async function getStaticPaths() {
   
  const park_codes = await pool.query("select park_code from parks");


   return {
     fallback: false,
     paths: park_codes.map(park => ({params:{park_code: park.park_code}
         })),
     
   };
 }
  
  export async function getStaticProps(context) {
    // fetch data for single meetups from
      const { data: result, } = await axios.get(
      "http://localhost:3014/api/" + context.params.park_code
    );
    
    return {
      props: {
        result,
        
      },
    };
    
  }
  
  export default park_details;
  