/* @ngInject */
export default class HomeService {
  constructor($http) {
    this.$http = $http;
  }

  getSomething() {
    return this.$http.get(/*some url to fetch*/);
  }
}
