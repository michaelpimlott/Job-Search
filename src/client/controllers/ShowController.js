myApp.controller('ShowController',
  function($scope, $http, $routeParams, $location, $route) {
    console.log('the id is', $routeParams.id);
    $http.get('/api/jobs/' + $routeParams.id).then(function(result) {
      console.log(result);
      $scope.job = result.data;
    })

    $scope.addActivity = function() {
      var date= $('#date').val();
      console.log(date);
      $http.post("/api/jobs/" + $routeParams.id + "/activity", {

        'type': $scope.type,
        'description': $scope.description,
        'date': date
      }).then(function(data, status, headers, config) {
        console.log('data inserted');
        console.log('this is that', data);
        $location.path('/show/' + $routeParams.id)
        $route.reload();
      });

    }


  });
