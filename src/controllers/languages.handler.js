const pool = require('../configs/db.js');

// Function to get the language information
async function getLanguages(req, res) {
    const query = `SELECT 
                    Language,
                    SUM(CountryPopulation * (Percentage / 100)) AS TotalSpeakers,
                    (SUM(CountryPopulation * (Percentage / 100)) / (SELECT SUM(Population) FROM country)) * 100 AS PercentageOfWorldPopulation
                FROM 
                    countrylanguage cl
                JOIN 
                    (SELECT Code, Population AS CountryPopulation FROM country) c ON cl.CountryCode = c.Code
                WHERE 
                    Language IN ('Chinese', 'English', 'Hindi', 'Spanish', 'Arabic')
                GROUP BY 
                    Language
                ORDER BY 
                    TotalSpeakers DESC;`;
    try {
        const [rows] = await pool.query(query);
        console.log("Fetched all languages:", rows.length);
            res.render('Languages/languages', { languages: rows });
        
    } catch (err) {
        console.error("Error fetching languages:", err.message);
        res.status(500).render('500');
    }
}

module.exports = { getLanguages };