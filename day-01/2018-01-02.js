'use strict';

const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, contents) => {
  const frequencies = contents
    .trim()
    .split('\n')
    .map(line => parseInt(line, 10));

  let currentFrequency = 0;
  const seen = new Map([[currentFrequency, true]]);
  let index = 0;

  for (;;) {
    currentFrequency += frequencies[index % frequencies.length];
    if (seen.has(currentFrequency)) {
      break;
    }

    seen.set(currentFrequency, true);
    index += 1;
  }

  console.log('First duplicate frequency:', currentFrequency);
});
