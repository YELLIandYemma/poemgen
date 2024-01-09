// express-backend/index.js

const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

    
const poems = [
  "Glistening bubbles in the summer air, Dancing and swirling without a care. Sun-kissed spheres, rainbow-hued, Pop! Bursting laughter, pure and mood.",
  "In the quiet night, a playground hush, Moonlight paints the swings with a silver blush. Stars twinkle, playing hide-and-seek, Childhood dreams take a celestial peek ",
  "Teddy bears gathered 'neath the shady tree, Sipping pretend tea, as happy as can be. Stuffed friends share stories, joy in their eyes, In a world of make-believe, where friendship never lies"
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
