const pool = require('../configs/db.js');

// Function to get all cities
async function getAllCities(req, res) {
    const query = "SELECT * FROM `city` ORDER BY Population DESC";
    try {
        const [rows] = await pool.query(query);
        if (rows.length > 0) {
            console.log("Fetched all cities:", rows.length);
            res.render('Cities/cities', { cities:rows });
        } else {
            console.log("No cities found");
            res.render('Cities/no_cities');
        }
    } catch (err) {
        console.error("Error fetching cities:", err.message);
        res.status(500).render('500');
    }
}

// Function to get cities by continent
async function getCitiesByContinent(req, res) {
    const continent = req.params.continent;
    const query = "SELECT city.* FROM `city` JOIN country ON city.CountryCode = country.Code WHERE country.Continent = ? ORDER BY city.Population DESC";
    try {
        const [rows] = await pool.query(query, [continent]);
        if (rows.length > 0) {
            console.log(`Fetched cities in ${continent}:`, rows.length);
            res.render('Cities/cities_continent', { cities: rows });
        } else {
            console.log(`No cities found in ${continent}`);
            res.render('Cities/no_cities');
        }
    } catch (err) {
        console.error(`Error fetching cities in ${continent}:`, err.message);
        res.status(500).render('500');
    }
}

// Function to get cities by region
async function getCitiesByRegion(req, res) {
    const region = req.params.region;
    const query = "SELECT city.* FROM city JOIN country ON city.CountryCode = country.Code WHERE country.Region = ? ORDER BY city.Population DESC;";
    try {
        const [rows] = await pool.query(query, [region]);
        if (rows.length > 0) {
            console.log(`Fetched cities in ${region}:`, rows.length);
            res.render('Cities/cities_region', { cities: rows });
        } else {
            console.log(`No cities found in ${region}`);
            res.render('Cities/no_cities');
        }
    } catch (err) {
        console.error(`Error fetching cities in ${region}:`, err.message);
        res.status(500).render('500');
    }
}

// Function to get cities by country Code
async function getCitiesByCountryCode(req, res) {
    const country = req.params.countryCode;
    const query = "SELECT * FROM `city` WHERE CountryCode = ? ORDER BY Population DESC";
    try {
        const [rows] = await pool.query(query, [country]);
        if (rows.length > 0) {
            console.log(`Fetched cities in ${country}:`, rows.length);
            res.render('Cities/cities_countryCode', { cities: rows });
        } else {
            console.log(`No cities found in ${country}`);
            res.render('Cities/no_cities');
        }
    } catch (err) {
        console.error(`Error fetching cities in ${country}:`, err.message);
        res.status(500).render('500');
    }
}
// Function to get cities by country Name
async function getCitiesByCountryName(req, res) {
    const country = req.params.countryName;
    const query = "SELECT city.* FROM `city` JOIN country ON city.CountryCode = country.Code WHERE country.Name = ? ORDER BY city.Population DESC";
    try {
        const [rows] = await pool.query(query, [country]);
        if (rows.length > 0) {
            console.log(`Fetched cities in ${country}:`, rows.length);
            res.render('Cities/cities_countryName', { cities: rows });
        } else {
            console.log(`No cities found in ${country}`);
            res.render('Cities/no_cities');
        }
    } catch (err) {
        console.error(`Error fetching cities in ${country}:`, err.message);
        res.status(500).render('500');
    }
}

// Function to get cities by district
async function getCitiesByDistrict(req, res) {
    const district = req.params.district;
    const query = "SELECT * FROM `city` WHERE District = ? ORDER BY Population DESC";
    try {
        const [rows] = await pool.query(query, [district]);
        if (rows.length > 0) {
            console.log(`Fetched cities in ${district}:`, rows.length);
            res.render('Cities/cities_district', { cities: rows });
        } else {
            console.log(`No cities found in ${district}`);
            res.render('Cities/no_cities');
        }
    } catch (err) {
        console.error(`Error fetching cities in ${district}:`, err.message);
        res.status(500).render('500');
    }
}

// Function to get a city by ID
async function getCityById(req, res) {
    const id = req.params.id;
    const query = "SELECT * FROM `city` WHERE ID = ?";
    const [rows] = await pool.query(query, [id]);
        if (rows.length > 0) {
            console.log(`Fetched city with ID ${id}:`, rows[0]);
            res.render('Cities/cities', { city: rows[0] });
        } else {
            console.log(`No city found with ID ${id}`);
            res.render('Cities/no_cities');
        }
}

module.exports = {
    getAllCities,
    getCityById,
    getCitiesByContinent,
    getCitiesByRegion,
    getCitiesByCountryName,
    getCitiesByCountryCode,
    getCitiesByDistrict
};
