'use strict';

const fs = require('fs');
const path = require('path');

const rs = fs.createReadStream(path.join(__dirname, 'ReadStream.txt'), 'utf-8');

rs.on('data', (chunk) => {
  process.stdout.write(chunk);
});
