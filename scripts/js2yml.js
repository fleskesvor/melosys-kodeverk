'use strict';
const yaml = require('js-yaml');
const Util = require('./util');
const Kodeverk = require('../src/index');

const ymlKodeMap = yaml.safeDump(Kodeverk.KTObjects);
Util.writeYmlFileSync('kodemap', ymlKodeMap);
