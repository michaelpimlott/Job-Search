myApp.controller('ContactController',
  function($scope, $http, $location) {
    $scope.view = {};
    $scope.submit = function(){
      $http.post("/api/jobs/:id/contact", {
        'name': $scope.name,
        'title': $scope.title,
        'phone': $scope.phone,
        'email': $scope.email
      }).success(function(data, status, headers, config){
        console.log('data inserted');
        console.log(data);
        $location.path('/show/'+data.id)
      });

    }
  }
);
