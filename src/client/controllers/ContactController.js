myApp.controller('ContactController',
  function($scope, $http, $location,$routeParams) {
    $scope.addNew = function(){
      $http.post("/api/jobs/"+$routeParams.id+"/contact", {
        'name': $scope.name,
        'title': $scope.title,
        'phone': $scope.phone,
        'email': $scope.email
      }).then(function(status){
        console.log('data inserted');
        $location.path('/show/'+$routeParams.id)
      });

    }
  }
);

// myApp.controller('NewController',
//   function($scope, $http, $window, $location) {
//     $scope.submitForm = function(){
//         $http.post("/api/jobs", {
//           'company': $scope.company,
//           'job_title': $scope.job_title,
//           'listing_URL': $scope.listing_URL
//         }).success(function(data, status, headers, config){
//           console.log('data inserted');
//           console.log(data);
//           $location.path('/show/'+data.id)
//         });
//
//       }
//
// });
