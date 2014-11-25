'use strict';

/**
 * @ngdoc function
 * @name vl4dBanBoardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller for the overall vl4d-ban-board app
 */
app.controller('MainCtrl', function($scope, $mdSidenav){
  //Sidenav items and urls
  $scope.items = [
                  {title: "Home", url: "/home"},
                  {title: "Edit Card", url: "/card/edit"},
                  {title: "New Card", url: "/card/new"}
  ];

  $scope.toggleLeft = function() {
    $mdSidenav('left').toggle();
  };

});
