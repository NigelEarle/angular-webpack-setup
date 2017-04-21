import angular from 'angular';

angular.module('app', [])
  .config(($urlRouterProvider, $locationProvider) => {
    $locationProvider.html5Mode(false);
    $urlRouterProvider.otherwise('/');
  });
