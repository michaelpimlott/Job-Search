myApp.controller('MainController',
  function($scope, $http, $routeParams) {
    $scope.view = {};
    $scope.view.test= "hi, there";
    $http.get('/api/jobs').then(function(data){
    $scope.view.jobdata = data.data;
});

    // $http.get('api/jobs/'+ $routeParams.id).then(function(result){
    //   console.log(result);
    //   $scope.job = result.data;
    // })
  }
);
