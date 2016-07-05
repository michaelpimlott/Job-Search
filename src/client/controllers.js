myApp.controller('MainController', [
  '$scope', '$http',
  function($scope, $http) {
    $scope.view = {};
    $scope.view.test = 'This is working';
    $scope.view.test2be = 'This is the homepage';
  }
]);
myApp.controller('LoginController', [
  '$scope',
  function($scope) {
    $scope.view = {};
    $scope.view.test = 'do whatever you want.';



  }
]);
myApp.controller('CalendarController', [
  '$scope', '$http',
  function($scope, $http) {
    $scope.view = {};
    $scope.view.tester = 'Edit whatever you want.';
  }
]);
myApp.controller('NewController', [
  '$scope', '$http',
  function($scope, $http) {
    $scope.view = {};
  
//     $scope.newApplication = {};
//     $scope.submitForm = function() {
//   $http({
//   method  : 'POST',
//   url     : 'process.php',
//   data    : $.param($scope.newApplication),
//   headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //
//   .success(function(data) {
//     console.log(data);
//
//     if (!data.success) {
//       // if not successful, bind errors to error variables
//       $scope.errorName = data.errors.name;
//       $scope.errorSuperhero = data.errors.jobTitle;
//     } else {
//       // if successful, bind success message to message
//       $scope.message = data.message;
//     }
//   });
// };

    // $scope.view = {};
    // $scope.view.test = 'New whatever you want.';
    // $scope.view.newApplication = {};
    // $scope.view.submitForm = function(isValid) {
    //   if (isValid) {
    //     console.log('look ma!');
    //   }
    //
    // };
    // $scope.newApplication = {};
    // $scope.newApplication.companyName = "Nike";
    // $scope.newApplication.jobTitle = "Boss";
  }
        ]);
myApp.controller('ShowController', [
  '$scope', '$http',
  function($scope, $http) {
    $scope.view = {};
    $scope.view.test = 'Show whatever you want.';
  }
]);
