import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './config';
import home from './app/Home';

/* @ngInject */
angular.module('app', [uirouter, home])
  .config(routing);
