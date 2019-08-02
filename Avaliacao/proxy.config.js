const proxy = [
    {
      context: '/api',
      target: 'http://localhost:51860',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;