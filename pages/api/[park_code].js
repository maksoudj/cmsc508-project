import { pool } from "config/db";

export default async function handler(req, res) {
    if (req.query.park_code.length === 4){
    try {
        let park = await pool.query("select  * from parks where parks.park_code = ?", [req.query.park_code])
        let number_of_stamps = await pool.query("select number_of_stamps from park_stamps where park_code = ?", [req.query.park_code])
        let activities = await pool.query("select activity_name from activities left join park_activities on activities.activity_id = park_activities.activity_id where park_code = ?", [req.query.park_code])
        let campgrounds = await pool.query("select * from campgrounds left join park_campgrounds on campgrounds.campgrounds_id = park_campgrounds.campgrounds_id where park_code = ?", [req.query.park_code])
        let stamps = await pool.query("CALL getNumberOfStampsByCode(?);", [req.query.park_code])
        return res.status(200).json({park,number_of_stamps, activities,campgrounds,stamps});
    }
    catch (error){
        return res.status(500).json({ message: error.message });
    }
}
else{
    try {
        let park = await pool.query("select * from parks where parks.park_location = ?", [req.query.park_code])
        return res.status(200).json({park});
    }
    catch (error){
        return res.status(500).json({ message: error.message });
    }
}
};