myApp.controller('MainController',
  function($scope, $http, $routeParams) {
    $scope.test= "hi, there";

    $http.get('/api/jobs').then(function(result){
      console.log('got the data', result);
      $scope.info = result.data;
    });
});
