const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
  try {
    const data = req.body.data;
    if (!data || !Array.isArray(data)) {
      throw new Error("Input data should be an array");
    }

    // Generate user ID based on full name and date of birth
    const user_id = "john_doe_17091999";  
    const email = "john@xyz.com";  
    const roll_number = "ABCD123";
    
    // Separate even and odd numbers from input array
    const even_numbers = data.filter(num => typeof num === 'number' && num % 2 === 0);
    const odd_numbers = data.filter(num => typeof num === 'number' && num % 2 !== 0);

    // Separate alphabets and convert them to uppercase
    const alphabets = data.filter(char => typeof char === 'string').map(char => char.toUpperCase());

    // Construct response object
    const response = {
      "is_success": true,
      "user_id": user_id,
      "email": email,
      "roll_number": roll_number,
      "odd_numbers": odd_numbers,
      "even_numbers": even_numbers,
      "alphabets": alphabets
    };

    res.json(response);
  } catch (error) {
    res.status(400).json({ "is_success": false, "error": error.message });
  }
});

app.listen(port, () => {
  console.log(Server is running on port ${port});
});
