var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html'
    })
    .when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'LoginController'
    })
    .when('/new', {
      templateUrl: 'partials/newJob.html',
      controller: 'NewController'
    })
    .when('/show', {
      templateUrl: 'partials/showJob.html',
      controller: 'ShowController'
    })
    .when('/calendar', {
      templateUrl: 'partials/calendar.html',
      controller: 'CalendarController'
  })
    .otherwise({redirectTo: '/'});
}]);
