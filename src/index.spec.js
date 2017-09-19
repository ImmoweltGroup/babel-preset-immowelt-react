const babel = require('babel-core');
const config = require('./index.js');

describe('babel-preset-immowelt-react', () => {
  let codeFixture;
  let options;

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
    options = Object.assign(
      {
        filename: 'foo.js'
      },
      config
    );
  });

  it('should export a valid object structure.', () => {
    expect(typeof config).toBe('object');
  });

  it('should not throw errors when transforming a code fixture with the config.', () => {
    expect(() => babel.transform(codeFixture, options)).not.toThrow();
  });

  it('should not transform flow annotations into prop-types when running the compilation in production environments.', () => {
    process.env.NODE_ENV = 'production';

    const {code} = babel.transform(codeFixture, options);

    expect(code).not.toContain('propTypes');
  });
});
