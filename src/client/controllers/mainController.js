myApp.controller('MainController',
  function($scope, $http, $routeParams) {


    $http.get('/api/jobs').then(function(result){
      console.log('got the data', result);
      console.log(result.data);
      $scope.info = result.data;
    });


    $scope.deleteJob = function(info){
        $scope.info.splice($scope.info.indexOf($routeParams.id), 1);
        console.log($routeParams.id);



    };






});
