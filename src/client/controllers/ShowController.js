myApp.controller('ShowController',
  function($scope, $http, $routeParams) {
    $scope.view = {};
    $scope.view.test = 'Show whatever you want.';
    console.log('the id is', $routeParams.id)
    $http.get('/api/jobs/'+$routeParams.id).then(function(result){
      console.log(result);
      $scope.job = result.data;
    })
  }
);
