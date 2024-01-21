// express-backend/index.js

const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 9001;

app.use(cors());

const poems = [
  "Glistening bubbles in the summer air, Dancing and swirling without a care. Sun-kissed spheres, rainbow-hued, Pop! Bursting laughter, pure and mood.",
  "In the quiet night, a playground hush, Moonlight paints the swings with a silver blush. Stars twinkle, playing hide-and-seek, Childhood dreams take a celestial peek ",
  "Teddy bears gathered 'neath the shady tree, Sipping pretend tea, as happy as can be. Stuffed friends share stories, joy in their eyes, In a world of make-believe, where friendship never lies",
  "In the twilight's hush, the wind softly speaks, Whispering secrets that the trees keep, A gentle dance, leaves rustling in the night, Nature's lullaby, a calming delight.",
  "Bathed in silver, the moon's tender glow, Casting shadows where dreams ebb and flow, Stars weave a sonnet, a celestial embrace, A moonlit serenade, in the vast cosmic space.",
  "Beside the shore where waves gently play, An eternal dance in the sun's warm ray, Salt-kissed air, whispers of the sea, In the ocean's embrace, forever be.",
  "In the garden of time where memories bloom, Petals of laughter, dispelling the gloom, Love's fragrance lingers, a timeless song, Eternal blossoms, where hearts belong.",
  "A symphony of colors, the dawn's grand debut, Golden hues paint the sky anew, Chirping birds join the orchestra's cheer, Sunrise whispers hope, dispelling fear.",
];

app.get("/", (req, res) => {
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
