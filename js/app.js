(function(){
    'use strict';

    angular.module('basicApp', [
        "ui.router",
        "navController",
        "homeController",
        "homeService",
        "firebase",
        "tableController"
    ])

    .config(["$stateProvider", "$urlRouterProvider",
        function ($stateProvider, $urlRouterProvider) {

            // define all app states (pages)
            $stateProvider
                .state("home", {
                    url: "/home",
                    templateUrl: "templates/home.html",
                    controller: "homeController as hc"
                })
                .state("table", {
                    url: "/table",
                    templateUrl: "templates/table.html",
                    controller: "tableController as tc"
                });

            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise("/home");
        }]);

}());
