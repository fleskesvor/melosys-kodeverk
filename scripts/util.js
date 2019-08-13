'use strict';
const fs = require('fs');
const process = require('process');

const DIST_DIR = `${process.cwd()}/dist`;
const createDirIfnotExists = (dir) => !fs.existsSync(dir) && fs.mkdirSync(dir);
const createDistDir = () => !fs.existsSync(DIST_DIR) && fs.mkdirSync(DIST_DIR);
const writeYmlFileSync = (navn, ymlText) => {
  createDistDir();
  const path = `${DIST_DIR}/${navn}.yml`;
  fs.writeFileSync(path, ymlText);
};
const writeSemverText = semver => {
  createDistDir();
  let buildno = ``;
  if (process.env.CIRCLE_BUILD_NUM) {
    buildno = `:${process.env.CIRCLE_BUILD_NUM}`;
  }
  const version = `${semver}${buildno}`;
  fs.writeFileSync(`${DIST_DIR}/semver.txt`, `${version}\n`);
};

const readFileSync = (path) => {
  return fs.readFileSync(path, 'utf8');
};
const readJsonAndParseSync = (path) => {
  return JSON.parse(readFileSync(path));
};
const lesSchemaSync = schemapath => {
  return readJsonAndParseSync(schemapath);
};

module.exports = {
  DIST_DIR,
  lesSchemaSync,
  writeYmlFileSync,
  writeSemverText,
  createDistDir,
  createDirIfnotExists
};
