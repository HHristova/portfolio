var angular = require('angular');
var ngRoute = require('angular-route');
require('angular-animate')
require('ng-image-gallery');

var app = angular.module('app', ['ngRoute', 'thatisuday.ng-image-gallery']);

app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider
            .when('/', {
                templateUrl: './templates/landing.html',
                activetab: 'about'
            })
            .when('/work', {
                templateUrl: './templates/work.html',
                activetab: 'work'
            })
            .when('/project/:projectId?', {
                templateUrl: './templates/project.html'
            })
            .otherwise({ redirectTo: '/'});
}]).run(["$rootScope", "$route", function ($rootScope, $route) {
    $rootScope.$route = $route;
}]);

app.controller('mainController', ['$scope', '$http', '$routeParams',
    function($scope, $http, $routeParams) {

    $scope.$on("$includeContentLoaded", function() {
        // Get current year and add it in the footer
        $scope.currentYear = new Date().getFullYear();
        angular.element(document.querySelector('.year')).html($scope.currentYear);
    });

    $scope.getProjects = function() {
        $http.get('resources/assets/scripts/projects.js').then(function(response) {
            $scope.projects = response.data;
        }).catch(function() {
          console.log('No data found..');
        });
    };

    $scope.getProjects();

}]);
