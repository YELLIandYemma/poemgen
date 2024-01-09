// express-backend/index.js

const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

    
const poems = [
  "Roses are red, violets are blue, sugar is sweet, and so are you.",
  "I wandered lonely as a cloud that floats on high o'er vales and hills.",
  "Hope is the thing with feathers that perches in the soul."
];

app.get('/api/generate-poem', (req, res) => {
  const randomPoem = generateRandomPoem();
  res.json({ poem: randomPoem });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

function generateRandomPoem() {

  const randomIndex = Math.floor(Math.random() * poems.length);
  return poems[randomIndex];
}
