const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


app.get('/', (req, res) => {
  res.send(`
    <h1>99 Bottles of beer on the wall</h1>
    <a href="/98">Take one down, pass it around</a>
  `);
});

app.get('/:number_of_bottles', (req, res) => {
  const bottles = parseInt(req.params.number_of_bottles);
  const nextBottles = bottles - 1;

  let link = '';
  if (nextBottles > 0) {
    link = `<a href="/${nextBottles}">Take one down, pass it around</a>`;
  }

  res.send(`
    <h1>${bottles} Bottles of beer on the wall</h1>
    ${link}
    <br>
    <a href="/">Start over</a>
  `);
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.get('/:number_of_bottles', (req, res) => {
  const bottles = parseInt(req.params.number_of_bottles);
  const nextBottles = bottles - 1;

  let link = '';
  if (nextBottles > 0) {
    link = `<a href="/${nextBottles}">Take one down, pass it around</a>`;
  }

  const bugs = getRandomInt(-3, 3); 
  const updatedBottles = bottles + bugs;

  res.send(`
    <h1>${updatedBottles} little bugs in the code</h1>
    ${link}
    <br>
    <a href="/">Start over</a>
  `);
});