module.exports = {
  presets: ['react-app'],
  env: {
    development: {
      plugins: ['flow-react-proptypes']
    },
    test: {
      plugins: ['flow-react-proptypes']
    }
  }
};
