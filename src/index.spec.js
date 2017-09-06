const config = require('./index.js');

describe('babel-preset-immowelt-react', () => {
  it('should export a valid object structure that contains the react-app preset.', () => {
    expect(typeof config).toBe('object');
    expect(config.presets).toBeDefined();
    expect(config.presets instanceof Array).toBe(true);
    expect(config.presets[0]).toBe('react-app');
  });
});
