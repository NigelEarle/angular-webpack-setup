/* @ngInject */
export default $stateProvider => (
  $stateProvider
    .state('home', {
      url: '/',
      template: require('./Home.html'), //eslint-disable-line
      controller: 'HomeController',
      controllerAs: 'home',
    })
);
