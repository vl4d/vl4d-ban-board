'use strict';

app.controller('MainCtrl', function($scope, $mdSidenav){
  $scope.items = ["one","two","three"];
  $scope.toggleLeft = function() {
    $mdSidenav('left').toggle();
  };

});
