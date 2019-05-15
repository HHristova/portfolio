var angular = require('angular');
var ngRoute = require('angular-route');

var app = angular.module('app', ['ngRoute']);

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
}]).run(['$rootScope', '$route', function ($rootScope, $route) {
    $rootScope.$route = $route;
}]);

// Get projects from JSON file
app.service('getProjectsService', ['$http',
    function($http) {
        return {
            getProjects: function() {
               return $http.get('resources/assets/scripts/projects.js')
               .then(function(response) {
                   return response.data;
               });
            }
        };
    }
]);

app.controller('mainController', ['$scope', '$routeParams', 'getProjectsService',
    function($scope, $routeParams, getProjectsService) {

    // Gallery filtering
    $scope.filterSelection = (c) => {
        var x, i;
        x = document.getElementsByClassName('picture-item');
        if (c == 'all') c = '';

        // Add the 'show' class to the filtered elements, and remove the 'show'
        // class from the elements that are not selected
        for (i = 0; i < x.length; i++) {
            hideFilteredElements(x[i], 'show');

            if (x[i].getAttribute('data-groups').indexOf(c) > -1) {
                showFilteredElements(x[i], 'show');
            }
        }
    }

    // Show filtered elements
    function showFilteredElements(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(' ');
        arr2 = name.split(' ');
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) {
                element.className += ' ' + arr2[i];
            }
        }
    }

    // Hide elements that are not selected
    function hideFilteredElements(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(' ');
      arr2 = name.split(' ');
      for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
          arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
      }
      element.className = arr1.join(' ');
    }

    $scope.setFilterButtonsClass = () => {
        const options = angular.element('#filter-options')[0];

        if (!options) {
            return;
        }

        const filterButtons = Array.from(options.children);
        const onClick = $scope.handleFilterClick.bind(this);

        filterButtons.forEach((button) => {
            button.addEventListener('click', onClick, false);
        });
    };

    $scope.handleFilterClick = (evt) => {
        const btn = evt.currentTarget;
        const isActive = btn.classList.contains('active');

        $scope.removeActiveClassFromChildren(btn.parentNode);

        let filterGroup;
        if (isActive) {
            btn.classList.remove('active');
        } else {
            btn.classList.add('active');
        }
    };

    $scope.removeActiveClassFromChildren = (parent) => {
        const { children } = parent;
        for (let i = children.length - 1; i >= 0; i--) {
            children[i].classList.remove('active');
        }
    }

    $scope.$on('$viewContentLoaded', function() {
        // Get my projects
        getProjectsService.getProjects().then(function(data) {
            $scope.projects = data;
        }).then(function() {
            $scope.setFilterButtonsClass();
        });

        // Get current year and add it in the footer
        $scope.currentYear = new Date().getFullYear();
        angular.element(document.querySelector('.year')).html($scope.currentYear);
    });

}]);
