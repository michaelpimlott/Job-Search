var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html'
    })
    .when('/login', {
      templateUrl: 'partials/login.html'
    })
    .when('/new', {
      templateUrl: 'partials/newJob.html'
    })
    .when('/show', {
      templateUrl: 'partials/showJob.html'
    })
    .when('/edit', {
      templateUrl: 'partials/edit.html'
  })
    .otherwise({redirectTo: '/'});
}]);
