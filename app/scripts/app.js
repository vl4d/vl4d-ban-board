'use strict';

/**
 * @ngdoc overview
 * @name vl4dBanBoardApp
 * @description
 * # vl4dBanBoardApp
 *
 * Main module of the application.
 */
var app = angular.module('vl4dBanBoardApp', ['ngMaterial','ngRoute', 'ui.sortable']);

//////configure Routes//////
app.config(function($routeProvider){
  $routeProvider.
    when('/home',{
      templateUrl : 'views/home.tpl.html',
      controller : 'HomeCtrl'
    }).
    otherwise({redirectTo:'/home'});
});
