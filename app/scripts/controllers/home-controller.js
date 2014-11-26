'use strict';

/**
 * @ngdoc function
 * @name vl4dBanBoardApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the homepage for the vl4d-ban-board app
 */
app.controller('HomeCtrl', function ($scope, $mdBottomSheet) {
  //Mock Data - TODO Pull From File Using a service
  $scope.kanban_cols =  [
                          {
                            title: "TODO",
                            cards: [{title:"Learn Angular",summary:"",details:"learn angularJS and make an app with it.",date_created:"2014-11-20"},
                                    {title:"Learn Mongo DB",summary:"",details:"Use mongodb in a project",date_created:"2014-11-10"},
                                    {title:"Investigate Kanban Capabilities",summary:"",details:"Figure out a Work Flow with a Kanban",date_created:"2014-11-19"}
                                   ], //Array ofcards
                            theme: "amber"
                          },
                          {
                            title: "Planned",
                            cards: [{title:"Planned1",summary:"",details:"planned details 1",date_created:"2014-11-19"},
                                    {title:"Planned2",summary:"",details:"planned details 2",date_created:"2014-10-20"},
                                    {title:"Planned3",summary:"",details:"planned details 3",date_created:"2014-10-14"},
                                    {title:"Planned4",summary:"",details:"planned details 4",date_created:"2014-10-12"}
                                   ], //Array ofcards
                            theme: "teal"
                          },
                          {
                            title: "In Progress",
                            cards: [{title:"In Progress One",summary:"",details:"In Progress Details One",date_created:"2014-09-10"},
                              {title:"In Progress Two",summary:"",details:"In Progress Details Two",date_created:"2014-09-11"}], //Array ofcards
                            theme: "deep-purple"
                          },
                          {
                            title: "Completed",
                            cards: [{title:"Completed One",summary:"",details:"Completed Details One",date_created:"2014-09-10"},
                              {title:"Completed Two",summary:"",details:"Completed Details Two",date_created:"2014-09-11"}], //Array ofcards
                            theme: "light-green"
                          }

  ];

  //Options for ng-sortable
  $scope.sortableOptions = {
    containment: '#vl4d-ban-board',
    //restrict move across columns. move only within column.
    accept: function (sourceItemHandleScope, destSortableScope) {
      return sourceItemHandleScope.itemScope.sortableScope.$id === destSortableScope.$id;
    }
  };

  //Action menu that pops up when the upward icon is clicked.
  $scope.showActionMenu = function($event){
    $mdBottomSheet.show({
      templateUrl: 'views/partials/action_menu.tpl.html',
      controller: 'ActionMenuCtrl',
      targetEvent: $event
    }).then(function(clickedItem) {
      $scope.alert = clickedItem.name + ' clicked!';
    });

  };

});
