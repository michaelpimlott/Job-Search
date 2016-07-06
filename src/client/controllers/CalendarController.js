myApp.controller('CalendarController', [
  '$scope', '$http',
  function($scope, $http) {
    $scope.view = {};
    $scope.view.tester = 'This is the one with the calendar';
  }
]);
