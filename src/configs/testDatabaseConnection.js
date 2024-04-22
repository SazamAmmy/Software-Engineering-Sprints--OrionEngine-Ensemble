const userConnection = require('./db.config.js');

async function testDatabaseConnection() {
    try {
        // Attempt to execute a simple query to test the database connection
        const [rows] = await userConnection.execute("SELECT 1");

        // If the query succeeds, log a success message
        console.log("Test query successful. Rows:", rows);
    } catch (error) {
        // If an error occurs during the query execution, log the error
        console.error("Error connecting to or querying the database:", error);
    } finally {
        // Regardless of the outcome, close the database connection
        userConnection.end();
        console.log("Database connection closed successfully.");
    }
}

// Call the function to test the database connection
testDatabaseConnection();
