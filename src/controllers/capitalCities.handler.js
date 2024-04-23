const pool = require('../configs/db.js');

// Function to get all capital cities
async function getAllCapitalCities(req, res) {
    const query = "SELECT city.CountryCode, city.Name, city.Population FROM city JOIN country ON city.ID = country.Capital ORDER BY city.Population DESC";
    try {
        const [rows] = await pool.query(query);
        if (rows.length > 0) {
            console.log("Fetched all capital cities:", rows.length);
            res.render('CapitalCities/capitalCities', { cities: rows });
        } else {
            console.log("No capital cities found");
            res.render('CapitalCities/no_capital_cities');
        }
    } catch (err) {
        console.error("Error fetching capital cities:", err.message);
        res.status(500).render('500');
    }
}

// Function to get capital cities by continent
async function getCapitalCitiesByContinent(req, res) {
    const continent = req.params.continent;
    const query = "SELECT city.CountryCode, city.Name, city.Population FROM city JOIN country ON city.ID = country.Capital WHERE country.Continent = ? ORDER BY city.Population DESC";
    try {
        const [rows] = await pool.query(query, [continent]);
        if (rows.length > 0) {
            console.log(`Fetched capital cities in ${continent}:`, rows.length);
            res.render('CapitalCities/capitalCities_continent', { cities: rows });
        } else {
            console.log(`No capital cities found in ${continent}`);
            res.render('CapitalCities/no_capital_cities');
        }
    } catch (err) {
        console.error(`Error fetching capital cities in ${continent}:`, err.message);
        res.status(500).render('500');
    }
}

// Function to get capital cities by region
async function getCapitalCitiesByRegion(req, res) {
    const region = req.params.region;
    const query = "SELECT city.CountryCode, city.Name, city.Population FROM city JOIN country ON city.ID = country.Capital WHERE country.Region = ? ORDER BY city.Population DESC";
    try {
        const [rows] = await pool.query(query, [region]);
        if (rows.length > 0) {
            console.log(`Fetched capital cities in ${region}:`, rows.length);
            res.render('CapitalCities/capitalCities_region', { cities: rows });
        } else {
            console.log(`No capital cities found in ${region}`);
            res.render('CapitalCities/no_capital_cities');
        }
    } catch (err) {
        console.error(`Error fetching capital cities in ${region}:`, err.message);
        res.status(500).render('500');
    }
}

module.exports = {
    getAllCapitalCities,
    getCapitalCitiesByContinent,
    getCapitalCitiesByRegion
};