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
  $scope.action_items = [
    { name: 'Create',   icon: 'images/ic_grey_create.png' },
    { name: 'Edit',     icon: 'images/ic_grey_edit.png'   },
    { name: 'Load',     icon: 'images/ic_grey_load.png'   },
    { name: 'Save',     icon: 'images/ic_grey_save.png'   },
    { name: 'Share',    icon: 'images/ic_grey_share.png'  }
  ];

  $scope.listItemClick = function($index) {
    var clickedItem = $scope.action_items[$index];
    alert(clickedItem.name +" was clicked!");
    $mdBottomSheet.hide(clickedItem);
  };
});
