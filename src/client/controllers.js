myApp.controller('MainController', [
  '$scope', '$http',
  function($scope, $http) {
    $scope.view = {};
    $scope.view.test = 'This is working';
    $scope.view.test2be = 'This is the homepage';
  }
]);
myApp.controller('LoginController', [
  '$scope',
  function($scope) {
    $scope.view = {};
    $scope.view.test = 'do whatever you want.';



  }
]);
myApp.controller('CalendarController', [
  '$scope', '$http',
  function($scope, $http) {
    $scope.view = {};
    $scope.view.tester = 'This is the one with the calendar';
  }
]);
myApp.controller('NewController', [
  '$scope', '$http',
  function($scope, $http) {
    $scope.view = {};

  }
]);
myApp.controller('ShowController', [
  '$scope', '$http',
  function($scope, $http) {
    $scope.view = {};
    $scope.view.test = 'Show whatever you want.';
  }
]);
