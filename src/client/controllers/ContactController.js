myApp.controller('ContactController',
  function($scope, $http, $location,$routeParams) {
    $scope.addNew = function(){
      console.log('params: ', $routeParams.id)
      $http.post("/api/jobs/"+ $routeParams.id+ "/contact", {
        'name': $scope.name,
        'title': $scope.title,
        'phone': $scope.phone,
        'email': $scope.email
      }).then(function(data, status, headers, config){
        console.log('data inserted');
        $location.path('/show/' + $routeParams.id)
      });

    }
  }
);
