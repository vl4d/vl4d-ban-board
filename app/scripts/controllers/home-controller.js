'use strict';

/**
 * @ngdoc function
 * @name vl4dBanBoardApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the homepage for the vl4d-ban-board app
 */
app.controller('HomeCtrl', function ($scope, $mdBottomSheet) {
  //Mock Data - TODO Pull From File
  $scope.kanban_cols =  [
                          {
                            title: "TODO",
                            cards: [{title:"Learn Angular",details:"learn angularJS and make an app with it.",date_created:"2014-11-20"},
                                    {title:"Learn Mongo DB",details:"Use mongodb in a project",date_created:"2014-11-10"},
                                    {title:"Investigate Kanban Capabilities",details:"Figure out a Work Flow with a Kanban",date_created:"2014-11-19"}
                                   ] //Array ofcards
                          },
                          {
                            title: "Planned",
                            cards: [{title:"Planned1",details:"planned details 1",date_created:"2014-11-19"},
                                    {title:"Planned2",details:"planned details 2",date_created:"2014-10-20"},
                                    {title:"Planned3",details:"planned details 3",date_created:"2014-10-14"},
                                    {title:"Planned4",details:"planned details 4",date_created:"2014-10-12"}
                                   ] //Array ofcards
                          },
                          {
                            title: "In Progress",
                            cards: [{title:"In Progress One",details:"In Progress Details One",date_created:"2014-09-10"},
                              {title:"In Progress Two",details:"In Progress Details Two",date_created:"2014-09-11"}] //Array ofcards
                          }

  ];

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
