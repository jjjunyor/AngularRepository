const proxy = [
    {
      context: '/api',
      target: 'http://localhost:51860/',
      "secure": false
    }
  ];
  module.exports = proxy;