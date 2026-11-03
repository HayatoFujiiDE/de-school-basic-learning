'use strict';
const path = require('path');
const os = require('os');
module.exports = function dependency(name) {
  const locations = [path.resolve(__dirname, '..')];
  if (process.env.BASIC_LEARNING_CHECK_MODULES) locations.push(process.env.BASIC_LEARNING_CHECK_MODULES);
  locations.push(path.join(os.homedir(), '.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules'));
  for (const location of locations) {
    try { return require(require.resolve(name, {paths: [location]})); } catch (error) {
      if (error.code !== 'MODULE_NOT_FOUND') throw error;
    }
  }
  throw new Error('Missing check dependency: ' + name + '. See README verification setup.');
};
