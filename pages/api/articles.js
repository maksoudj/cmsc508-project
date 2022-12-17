import {pool} from '../../config/db'
export default async function handler(req, res) {
    if (req.method == 'GET'){
        try{
        const articles = await pool.query('select * from articles') 
        return res.status(200).json(articles);
        }
        catch(error){
            return res.status(500).json({ message: error.message });
        }
    }
}