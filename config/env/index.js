import path from 'path';
import devconfig from './development';
import prodconfig from './production';
import testconfig from './test';

const configs = {
  development: devconfig,
  production: prodconfig,
  test: testconfig
};

const env = process.env.NODE_ENV || 'development';
const config = configs[env];

const defaults = {
  root: path.join(__dirname, '/..')
};

export default Object.assign(defaults, config);
