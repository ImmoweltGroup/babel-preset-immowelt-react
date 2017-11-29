const babel = require('babel-core');
const createConfig = require('./createConfig.js');
const config = require('./index.js');

describe('babel-preset-immowelt-react', () => {
  let codeFixture;

  function createOptions(env = 'production') {
    process.env.NODE_ENV = env;

    return Object.assign(
      {
        filename: 'foo.js'
      },
      createConfig()
    );
  }

  beforeAll(() => {
    codeFixture = `
// @flow

import React from 'react';

type PropsType = {
  numbersToRender: Array<number>
};

const PrettyNumberList = (props: PropsType) => {
  return <div>{props.numbersToRender.join(', ')}</div>;
};
const reactElement = <PrettyNumberList numbers={[0]} />;

export default PrettyNumberList;
`;
  });

  it('should export a valid object structure.', () => {
    expect(typeof config).toBe('object');
  });

  it('should not throw errors when transforming a code fixture with the config.', () => {
    expect(() => babel.transform(codeFixture, createOptions())).not.toThrow();
  });

  it('should transform flow annotations into flow-runtime types when running the compilation in development environments.', () => {
    expect(
      babel.transform(codeFixture, createOptions('development')).code
    ).toContain('flow-runtime');
    expect(
      babel.transform(codeFixture, createOptions('production')).code
    ).not.toContain('flow-runtime');
  });
});
