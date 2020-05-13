const { readFile } = require('fs').promises;
const { join } = require('path');
const { Type, Schema, load } = require('js-yaml');

const withAlphaType = new Type('!alpha', {
  kind: 'sequence',
  construct: ([hexRGB, alpha]) => hexRGB + alpha,
  represent: ([hexRGB, alpha]) => hexRGB + alpha,
})

const schema = Schema.create([withAlphaType]);

module.exports = async () => {
  const yamlFile = await readFile(
    join(__dirname, '..', 'src', 'transylvania.yml'),
    'utf-8'
  );

  const base = load(yamlFile, { schema });

  for (const key of Object.keys(base.colors)) {
    if (!base.colors[key]) {
      delete base.colors[key];
    }
  }

  return {
    base,
  };
};