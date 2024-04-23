const pool = require('../configs/db.js');

// Function to get all countries
async function getAllCountries(req, res) {
    const query = "SELECT country.Code, country.Name, country.Continent, country.Region, country.Population, city.Name AS Capital FROM country LEFT JOIN city ON country.Capital = city.ID ORDER BY Population DESC";
    try {
        const [rows] = await pool.query(query);
        if (rows.length > 0) {
            console.log("Fetched all countries:", rows.length);
            res.render('Countries/countries', { countries:rows });
        } else {
            console.log("No countries found");
            res.render('Countries/no_countries');
        }
    } catch (err) {
        console.error("Error fetching countries:", err.message);
        res.status(500).render('500');
    }
}

// Function to get a country by code
async function getCountryByCode(req, res) {
    const code = req.params.code;
    const query = "SELECT country.Code, country.Name, country.Continent, country.Region, country.Population, city.Name AS Capital FROM country LEFT JOIN city ON country.Capital = city.ID WHERE country.Code = ? ORDER BY Population DESC";
    try {
        const [rows] = await pool.query(query, [code]);
        if (rows.length > 0) {
            console.log(`Fetched country with code ${code}:`, rows.length);
            res.render('Countries/countries', { countries: rows });
        } else {
            console.log(`No country found with code ${code}`);
            res.render('Countries/no_countries');
        }
    } catch (err) {
        console.error(`Error fetching country with code ${code}:`, err.message);
        res.status(500).render('500');
    }
}

// Function to get countries by continent
async function getCountriesByContinent(req, res) {
    const continent = req.params.continent;
    const query = "SELECT country.Code, country.Name, country.Continent, country.Region, country.Population, city.Name AS Capital FROM country LEFT JOIN city ON country.Capital = city.ID WHERE Continent = ? ORDER BY Population DESC";
    try {
        const [rows] = await pool.query(query, [continent]);
        if (rows.length > 0) {
            console.log(`Fetched countries in ${continent}:`, rows.length);
            res.render('Countries/countries_continent', { countries: rows });
        } else {
            console.log(`No countries found in ${continent}`);
            res.render('Countries/no_countries');
        }
    } catch (err) {
        console.error(`Error fetching countries in ${continent}:`, err.message);
        res.status(500).render('500');
    }
}

// get all countries by region
async function getCountriesByRegion(req, res) {
    const region = req.params.region;
    const query = "SELECT country.Code, country.Name, country.Continent, country.Region, country.Population, city.Name AS Capital FROM country LEFT JOIN city ON country.Capital = city.ID  WHERE Region = ? ORDER BY Population DESC";
    try {
        const [rows] = await pool.query(query, [region]);
        if (rows.length > 0) {
            console.log(`Fetched countries in ${region}:`, rows.length);
            res.render('Countries/countries_region', { countries: rows });
        } else {
            console.log(`No countries found in ${region}`);
            res.render('Countries/no_countries');
        }
    } catch (err) {
        console.error(`Error fetching countries in ${region}:`, err.message);
        res.status(500).render('500');
    }
}

// get all countries by country name
async function getCountriesByCountryName(req, res) {
    const countryName = req.params.Name;
    const query = "SELECT country.Code, country.Name, country.Continent, country.Region, country.Population, city.Name AS Capital FROM country LEFT JOIN city ON country.Capital = city.ID WHERE country.Name = ? ORDER BY Population DESC";
    try {
        const [rows] = await pool.query(query, [countryName]);
        if (rows.length > 0) {
            console.log(`Fetched countries in ${countryName}:`, rows.length);
            res.render('Countries/countries', { countries: rows });
        } else {
            console.log(`No countries found in ${countryName}`);
            res.render('Countries/no_countries');
        }
    } catch (err) {
        console.error(`Error fetching countries in ${countryName}:`, err.message);
        res.status(500).render('500');
    }
}

module.exports = {
    getAllCountries,
    getCountryByCode,
    getCountriesByContinent,
    getCountriesByRegion,
    getCountriesByCountryName
};