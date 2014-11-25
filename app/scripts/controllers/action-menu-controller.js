'use strict';

/**
 * @ngdoc function
 * @name vl4dBanBoardApp.controller:ActionMenuCtrl
 * @description
 * # ActionMenuCtrl
 * Controller for the ActionMenu that appears on the Home page.
 */
app.controller('ActionMenuCtrl', function($scope, $mdBottomSheet) {
  //Items that will show on the Action menu that pops up.
  //TODO Add tooltip to template (or make my own).
  $scope.action_items = [
    { name: 'Create',   icon: 'images/ic_grey-create.png',  tooltip_msg: 'Create... ' },
    { name: 'Edit',     icon: 'images/ic_grey-edit.png',    tooltip_msg: 'Edit...' },
    { name: 'Load',     icon: 'images/ic_grey-load.png',    tooltip_msg: 'Load from file' },
    { name: 'Save',     icon: 'images/ic_grey-save.png',    tooltip_msg: 'Save to file' },
    { name: 'Share',    icon: 'images/ic_grey-share.png',   tooltip_msg: 'Share Vl4d-Ban-Board' }
  ];

  $scope.listItemClick = function($index) {
    var clickedItem = $scope.action_items[$index];
    alert(clickedItem.name +" was clicked!");
    $mdBottomSheet.hide(clickedItem);
  };
});
