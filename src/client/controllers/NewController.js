myApp.controller('NewController',
  function($scope, $http, $window, $location) {
    $scope.files = JSON.parse($window.localStorage.getItem('files') || '[]');
    $scope.pickFile = pickFile;
    $scope.onSuccess = onSuccess;

    function pickFile(){
        filepickerService.pick(
            {mimetype: 'image/*'},
            onSuccess
        );
    };

    function onSuccess(Blob){
        $scope.files.push(Blob);
        $window.localStorage.setItem('files', JSON.stringify($scope.files));
    };

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
