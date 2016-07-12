myApp.controller('ShowController',
  function($scope, $http, $routeParams, $location) {
    console.log('the id is', $routeParams.id);
    $http.get('/api/jobs/' + $routeParams.id).then(function(result) {
      console.log(result);
      $scope.job = result.data;
    })




    $scope.addActivity = function() {
      $http.post("/api/jobs/" + $routeParams.id + "/activity", {
        'type': $scope.type,
        'description': $scope.description
      }).then(function(data, status, headers, config) {
        console.log('data inserted');
        console.log('this is that', data);
        $location.path('/show/' + $routeParams.id)
      });

    }


  });

// });

// $scope.edit = function(routeparams) {
//   console.log($routeParams.id);
//   http.get('/api/jobs' + $routeParams.id).success(function(response){
//
//   })
// };
//

// });




//     $scope.remove = function($routeParams) {
//       console.log($routeParams.id);
//       $http.delete('/api/jobs' + $routeParams.id).success(function(response){
//         refresh();
//       });
//     };
//
//
//
