function createConfig() {
  const config = {
    presets: ['react-app'],
    plugins: []
  };

  if (process.env.NODE_ENV === 'development') {
    config.plugins = ['flow-react-proptypes'];
  }

  return config;
}

module.exports = createConfig;
