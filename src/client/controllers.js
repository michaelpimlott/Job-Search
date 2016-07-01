
myApp.controller('MainController', [
  '$scope',
  function($scope){
    $scope.view = {};
    $scope.view.test = 'This is working';
    $scope.view.test2be = 'This is the homepage';
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
        $scope.view.submitForm = function(isValid) {
          if (isValid) {
      alert('our form is amazing');
    }

  };
      }]);
      myApp.controller('ShowController', [
        '$scope',
        function($scope){
          $scope.view = {};
          $scope.view.test = 'Show whatever you want.';
        }]);
