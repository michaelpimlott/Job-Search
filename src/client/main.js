var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'MainController'
    })
    .when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'LoginController'
    })
    .when('/new', {
      templateUrl: 'partials/newJob.html',
      controller: 'NewController'
    })
    .when('/show/:id', {
      templateUrl: 'partials/showJob.html',
      controller: 'ShowController'
    })
    .when('/calendar', {
      templateUrl: 'partials/calendar.html',
      controller: 'CalendarController'
  })
    .when('/jobs', {
      templateUrl: 'partials/jobList.html',
      controller: 'JobListController'
    })
    .when('/contact', {
      templateUrl: 'partials/contact.html',
      controller: 'ContactController'
    })
    .otherwise({redirectTo: '/'});
}]);
