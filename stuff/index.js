const { promisify } = require('tsubaki');
const fs = require('fs');
const readFile = promisify(fs.readFile);
const path = require('path');
const jsdoc2md = require('jsdoc-to-markdown');
const Documentation = require('./documentation');
const config = require('./config');

if (config.verbose) console.log(`Running with config: `, config);
const mainPromises = [null, null];

console.log('Parsing JSDoc ');