const axios = require('axios');
const cheerio = require('cheerio');
const url = 'https://en.wikipedia.org/wiki/States_and_union_territories_of_India';

// credits - Coding Garden with CJ

async function getStates() {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const table = $('h3>span#States').parent().next()
  const states = [];

  table.find('tbody tr').slice(1).each((i, el) => {
    const $row = $(el);
    const state = {};
    const labels = [
      'vehicle_code',
      'zone',
      'capital_city',
      'largest_city',
      'statehood',
      'population',
      'area',
      'official_languages',
      'additional_languages'
    ]

    state.name = $row.find('th').text().trim();

    let offset = 0;
    $row.find('td').slice(1).each((j, el) => {

      const $col = $(el);
      let value = $col.text().trim();

      const numberValue = Number(value.replace(/,/g, ''));

      if (!isNaN(numberValue)) {
        value = numberValue;
      }

      if (j === 2) {
        value = $col.find('a').first().text().trim();

        if ($col.attr('colspan') === '2') {
          const label = labels[j];
          state[label] = value;
          offset = 1;
        }
      }

      const label = labels[j + offset];
      state[label] = value;
    });
    states.push(state);
  });
  return states;
}

module.exports = getStates;