export default [
  {
    path: '/',
    controller: require('./get'),
  },
  {
    path: '/accept',
    controller: require('./accept'),
  },
  {
    path: '/add',
    controller: require('./add'),
  },
];
