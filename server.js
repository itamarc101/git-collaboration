const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 1. Serve static files from the dist folder
app.use(express.static(path.join(__dirname, 'dist')));

// 2. Define the /message route
app.get('/secret-message', (req, res) => {
  res.send('🕵️‍♂️ The secret code is: 42-UNICORN!');
});

// 3. Handle all other routes (SPA fallback if needed)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// 4. Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
