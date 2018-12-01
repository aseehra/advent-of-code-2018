'use strict';

const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, contents) => {
  if (err) {
    console.err('Could not read file');
    return;
  }

  const frequency = contents
    .trim()
    .split('\n')
    .map(line => parseInt(line, 10))
    .reduce((acc, num) => acc + num);

  console.log('Frequency:', frequency);
});
