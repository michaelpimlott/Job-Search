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

myApp.controller('NewController', [
  '$scope', '$http',
  function($scope, $http) {
    $scope.view = {};

  }
]);
