
myApp.controller('MainController', [
  '$scope',
  function($scope){
    $scope.view = {};
    $scope.view.test = 'Go Fuck Yourself.';
    $scope.view.test2be = 'go fek hmpge';
  }]);
myApp.controller('LoginController', [
  '$scope',
  function($scope){
    $scope.view = {};
    $scope.view.test = 'do whatever you want.';
  }]);
  myApp.controller('EditController', [
    '$scope',
    function($scope){
      $scope.view = {};
      $scope.view.test = 'edit whatever you want.';
    }]);
    myApp.controller('NewController', [
      '$scope',
      function($scope){
        $scope.view = {};
        $scope.view.test = 'New whatever you want.';
      }]);
      myApp.controller('ShowController', [
        '$scope',
        function($scope){
          $scope.view = {};
          $scope.view.test = 'Show whatever you want.';
        }]);
