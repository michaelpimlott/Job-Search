myApp.controller('LoginController',
  function($scope, $http, $routeParams) {
    $http.get('api/jobs').then(function(result){
      console.log('this data', result.data);
      $scope.user = result.data;
    })








  }
);
