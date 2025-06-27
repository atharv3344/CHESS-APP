const express = require('express');
const path = require('path');

const app = express();

// Static files serve karo (HTML, JS, CSS)
app.use(express.static(__dirname));

// Index file serve karo
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Port Render ke hisaab se
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
