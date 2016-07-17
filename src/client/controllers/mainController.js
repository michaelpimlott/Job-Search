myApp.controller('MainController',
  function($scope, $http, $routeParams) {


    $http.get('/api/jobs').then(function(result){
      console.log('got the data', result);
      console.log(result.data);
      $scope.info = result.data;
    });


    // $scope.deleteJob = function(info){
    //     $scope.info.splice($scope.info.indexOf($routeParams.id), 1);
    //     $route.reload();
    //
    //
    // };

      $scope.deleteJob = function(){
        $http.delete("api/jobs/" +$routeParams.id +"/delete").success(function(response){
          $route.reload();
        })
      }







});
