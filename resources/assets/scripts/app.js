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

    // Gallery filtering
    $scope.filterSelection = function (c) {
      var x, i;
      x = document.getElementsByClassName('picture-item');
      if (c == "all") c = "";
      // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
      for (i = 0; i < x.length; i++) {
        RemoveClass(x[i], "show");
        if (x[i].getAttribute('data-groups').indexOf(c) > -1) addClass(x[i], "show");
      }
    }

    // Show filtered elements
    function addClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
          element.className += " " + arr2[i];
        }
      }
    }

    // Hide elements that are not selected
    function RemoveClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
          arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
      }
      element.className = arr1.join(" ");
    }

    // Add active class to the current button (highlight it)
    // var btnContainer = document.getElementById("myBtnContainer");
    // var btns = btnContainer.getElementsByClassName("btn");
    // for (var i = 0; i < btns.length; i++) {
    //   btns[i].addEventListener("click", function(){
    //     var current = document.getElementsByClassName("active");
    //     current[0].className = current[0].className.replace(" active", "");
    //     this.className += " active";
    //   });
    // }

    // const onClick = this._handleFilterClick.bind(this);
    // _handleFilterClick(evt) {
    //     const btn = evt.currentTarget;
    //     const isActive = btn.classList.contains('active');
    //     const btnGroup = btn.getAttribute('data-group');
    //
    //     this._removeActiveClassFromChildren(btn.parentNode);
    //
    //     let filterGroup;
    //     if (isActive) {
    //         btn.classList.remove('active');
    //         filterGroup = Shuffle.ALL_ITEMS;
    //     } else {
    //         btn.classList.add('active');
    //         filterGroup = btnGroup;
    // }
    //
    //     this.shuffle.filter(filterGroup);
    // }
    //
    // _removeActiveClassFromChildren(parent) {
    //     const { children } = parent;
    //     for (let i = children.length - 1; i >= 0; i--) {
    //         children[i].classList.remove('active');
    //     }
    // }

    $scope.getProjects = function() {
        $http.get('resources/assets/scripts/projects.js').then(function(response) {
            $scope.projects = response.data;

            $scope.filterSelection('all'); // Execute the function and show all columns

        }).catch(function() {
          console.log('No data found..');
        });
    };

    $scope.getProjects();

}]);
