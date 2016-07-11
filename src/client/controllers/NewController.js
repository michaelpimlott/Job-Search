myApp.controller('NewController',
  function($scope, $http, $window, $location) {
    $scope.submitForm = function(){
        $http.post("/api/jobs", {
          'company': $scope.company,
          'job_title': $scope.job_title,
          'listing_URL': $scope.listing_URL
        }).success(function(data, status, headers, config){
          console.log('data inserted');
          console.log(data);
          $location.path('/show/'+data.id)
        });

      }

});
