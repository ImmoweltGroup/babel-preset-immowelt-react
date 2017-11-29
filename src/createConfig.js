function createConfig() {
  const config = {
    presets: ['react-app', 'flow'],
    plugins: []
  };

  if (process.env.NODE_ENV === 'development') {
    config.plugins = ['flow-runtime'];
  }

  return config;
}

module.exports = createConfig;
