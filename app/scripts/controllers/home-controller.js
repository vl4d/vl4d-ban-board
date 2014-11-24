'use strict';

/**
 * @ngdoc function
 * @name vl4dBanBoardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vl4dBanBoardApp
 */
app.controller('HomeCtrl', function ($scope, $mdBottomSheet) {
  $scope.hello = "Hello World";

  //Action menu that pops up when the upward icon is clicked.
  $scope.showActionMenu = function($event){
    $mdBottomSheet.show({
      templateUrl: 'views/action_menu.tpl.html',
      controller: 'ActionMenuCtrl',
      targetEvent: $event
    }).then(function(clickedItem) {
      $scope.alert = clickedItem.name + ' clicked!';
    });

  };

});
