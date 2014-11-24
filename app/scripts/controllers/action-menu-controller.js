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
    { name: 'Create',   icon: 'images/ic_grey-create.png' },
    { name: 'Edit',     icon: 'images/ic_grey-edit.png'   },
    { name: 'Load',     icon: 'images/ic_grey-load.png'   },
    { name: 'Save',     icon: 'images/ic_grey-save.png'   },
    { name: 'Share',    icon: 'images/ic_grey-share.png'  }
  ];

  $scope.listItemClick = function($index) {
    var clickedItem = $scope.action_items[$index];
    alert(clickedItem.name +" was clicked!");
    $mdBottomSheet.hide(clickedItem);
  };
});
