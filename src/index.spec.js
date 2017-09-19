const babel = require('babel-core');
const config = require('./index.js');

describe('babel-preset-immowelt-react', () => {
  it('should export a valid object structure.', () => {
    expect(typeof config).toBe('object');
  });

  it('should not throw errors when transforming a code fixture with the config.', () => {
    const code = `
// @flow
type SomeNumber = number;
const foo: SomeNumber = 2;

export default foo;
`;
    expect(() => babel.transform(code, config)).not.toThrow();
  });
});
