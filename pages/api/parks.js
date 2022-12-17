import { pool } from "config/db";

export default async function handler(req, res) {
    if (req.method == "GET") {
        try {
            const result = await pool.query("select park_full_name as label, park_code as value from parks");
            const locations = await pool.query("select distinct park_location as label, park_location as value from parks");
            const numOfStamps = await pool.query("select * from sumStamps");
            return res.status(200).json({result,numOfStamps,locations});
        }
        catch (error){
            return res.status(500).json({error});
        }
    }
    if (req.method == "POST") {
        console.log(req.body)
        if (req.body.hasOwnProperty("activity_id")){
            try{
            let { activity_id, activity_name } = req.body;
            const result = await pool.query ("insert into activities SET ?",{
                activity_id,
                activity_name
            })
            return res.status(200).json({ ...req.body, id: result.insertId });
        }
        catch (error){
            return res.status(500).json({ message: error.message });
        }
        }
        if (req.body.hasOwnProperty("campgrounds_id")){
            try{
            let { campgrounds_id, latitude, longitude, description, name } = req.body;
            const result = await pool.query ("insert into campgrounds SET ?",{
                campgrounds_id, 
                latitude, 
                longitude, 
                description, 
                name
            })
            console.log(result)
            return res.status(200).json({ ...req.body, id: result.insertId });
        }
        catch (error){
            return res.status(500).json({ message: error.message });
        }
        }
        if (req.body.hasOwnProperty("park_code")){
            try{
            let { park_code, park_full_name, park_url, park_description, park_location, number_of_stamps} = req.body;
            const result = await pool.query ("insert into parks SET ?",{
                park_full_name, 
                park_code, 
                park_url, 
                park_description, 
                park_location
            })
            console.log(result)
            const result2 = await pool.query ("insert into park_stamps SET ?",{
                park_code, 
                number_of_stamps
            })
            
            return res.status(200).json({ ...req.body, id: result.insertId });
        }
        catch (error){
            return res.status(500).json({ message: error.message });
        }
        }
        

    }
}