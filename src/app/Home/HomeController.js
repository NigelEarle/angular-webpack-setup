import './Home.scss';

export default class HomeController {
  constructor($location) {
    this.$location = $location;
    this.title = 'Angular Webpack Setup';
    this.subTitle = 'Angular webpack boiler plate using ES6 & OOP';
  }
}

HomeController.$inject = ['$location'];
