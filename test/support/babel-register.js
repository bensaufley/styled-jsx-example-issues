const fs = require('fs');

const { env, ...babelrc } = JSON.parse(fs.readFileSync(`${process.cwd()}/.babelrc`));
const babelConfig = {
  ...env.test,
  ...babelrc,
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
};

require('@babel/register')(babelConfig);
