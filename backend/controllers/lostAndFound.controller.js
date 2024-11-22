import connection from "../config/db.js";

const getAllLostAndFound = (req, res) => {
    const query = 'SELECT * FROM lost_and_found'; 

    connection.query(query, (err, results) => {
        if (err) {
        return res.status(500).json({ error: 'Error fetching data', details: err.stack });
        }
        res.status(200).json({ message: 'All lost and found entries', data: results });
    });
};

const addField = (req, res) => {
    const {
      user_name,
      user_email,
      user_phone,
      item_name,
      item_category,
      item_description,
      location_lost,
      date_lost,
      status
    } = req.body;  // Extract data from the incoming request
  
    // Validate the required fields
    if (!user_name || !user_email || !item_name || !status) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
  
    // SQL query to insert the new data into the MySQL table
    const addFieldQuery = `
      INSERT INTO lost_and_found 
      (user_name, user_email, user_phone, item_name, item_category, item_description, location_lost, date_lost, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;
  
    // Execute the SQL query
    connection.query(
      addFieldQuery,
      [user_name, user_email, user_phone, item_name, item_category, item_description, location_lost, date_lost, status],
      (err, results) => {
        if (err) {
          console.error('Error inserting data:', err);
          return res.status(500).json({ error: 'Error inserting data into the database', details: err.stack });
        }
  
        // Send a response if successful
        res.status(201).json({
          message: 'New entry added successfully!',
          data: {
            id: results.insertId,
            user_name,
            user_email,
            user_phone,
            item_name,
            item_category,
            item_description,
            location_lost,
            date_lost,
            status
          }
        });
      }
    );
};

export {
    getAllLostAndFound,
    addField
}