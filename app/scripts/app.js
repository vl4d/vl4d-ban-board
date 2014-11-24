'use strict';

/**
 * @ngdoc overview
 * @name vl4dBanBoardApp
 * @description
 * # vl4dBanBoardApp
 *
 * Main module of the application.
 */
var app = angular.module('vl4dBanBoardApp', ['ngMaterial','ngRoute']);

//////configure Routes//////
app.config(function($routeProvider){
  $routeProvider.
    when('/home',{
      templateUrl : 'views/home.tpl.html',
      controller : 'HomeCtrl'
    }).
    when('/card/new', {
      templateUrl: 'views/edit_card.tpl.html',
      controller : 'CardCtrl'
    }).
    when('/card/edit',{
      templateUrl: 'views/edit_card.tpl.html',
      controller: 'CardCtrl'
    }).
    otherwise({redirectTo:'/home'});
});
