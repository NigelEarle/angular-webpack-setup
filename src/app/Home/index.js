import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './routes';
import HomeService from './HomeService';
import HomeController from './HomeController';

export default angular.module('home', [uirouter])
  .config(routes)
  .service('HomeService', HomeService)
  .controller('HomeController', HomeController)
  .name;
