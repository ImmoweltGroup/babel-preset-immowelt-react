# @immowelt/babel-preset-immowelt-react

[![Greenkeeper badge](https://badges.greenkeeper.io/ImmoweltGroup/babel-preset-immowelt-react.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/ImmoweltGroup/babel-preset-immowelt-react.svg?branch=master)](https://travis-ci.org/ImmoweltGroup/babel-preset-immowelt-react)
[![Dependency Status](https://david-dm.org/ImmoweltGroup/babel-preset-immowelt-react.svg)](https://david-dm.org/ImmoweltGroup/babel-preset-immowelt-react)
[![devDependency Status](https://david-dm.org/ImmoweltGroup/babel-preset-immowelt-react/dev-status.svg)](https://david-dm.org/ImmoweltGroup/babel-preset-immowelt-react#info=devDependencies&view=table)

This package includes the Babel preset used by [Create React App](https://github.com/facebookincubator/create-react-app) as well as other babel plugins or presets we might add to our transpilation stack in the future.

## Usage
If you want to use the `@immowelt/babel-preset-immowelt-react` preset, you can install it by executing:
```js
npm i -S @immowelt/babel-preset-immowelt-react
```

Then create a file named `.babelrc` with following contents in the root folder of your project:

```js
{
  "presets": [
    "@immowelt/babel-preset-immowelt-react"
  ]
}
```

## Contributing
Please make sure that you adhere to our code style, you can validate your changes / PR by executing `npm run lint`.
Visit the [eslint-config-immowelt-react](https://github.com/ImmoweltGroup/eslint-config-immowelt-react) package for more information.

## License
See the `LICENSE` file at the root of the repository.
