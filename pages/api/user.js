import { pool } from "config/db";

export default async function handler(req, res) {
    try{
    const check = await pool.query("select * from user where username = ? and password = ?",[req.body.username, req.body.password])
    return res.status(200).json(check);
    }
    catch(error){
        return res.status(500).json(error);
    }
}