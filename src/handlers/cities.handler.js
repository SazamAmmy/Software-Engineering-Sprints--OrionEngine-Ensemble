const pool = require('./db.js');
async function getAllCities(req, res) {
    const query = "SELECT * FROM `city` order by Population DESC;";
        const [rows] = await pool.query(query);
        console.log(`Fetched ${rows.length} cities.`);
        return rows;

}

async function getCityById(req, res) {
    const cityId = req.params.id;
    const query = "SELECT * FROM `city` WHERE ID = ?";
    try {
        const [rows] = await pool.execute(query, [cityId]);
        if (rows.length > 0) {
            console.log(`Fetched city with ID: ${cityId}`, rows[0]);
            res.render('city', { city: rows[0] });
        } else {
            console.log(`No city found with ID: ${cityId}`);
            res.status(404).send("City not found");
        }
    } catch (err) {
        console.error(`Error fetching city with ID ${cityId}:`, err.message);
        res.status(500).render('500');
    }
}
module.exports = {
    getAllCities,
    getCityById
};
