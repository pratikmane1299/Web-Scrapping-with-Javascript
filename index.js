const express = require('express');
const getState = require('./getIndianStates');
const getStates = require('./getIndianStates');

const app = express();
const port = process.env.PORT || 9110;

app.use(express.static('public'))

app.get('/api/states', async (req, res) => {
  const states = await getStates()
  res.json(states);
});

app.listen(port, () => {
  console.log(`running on http://localhost:${port}`);    
});