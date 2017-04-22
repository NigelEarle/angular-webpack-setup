/* @ngInject */
export default $stateProvider => (
  $stateProvider
    .state('home', {
      url: '/',
      abstract: true,
      templateUrl: 'Home.html',
      controller: 'HomeController',
    })
);
