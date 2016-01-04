/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-route.d.ts" />
module angularjsApp {
    export class Routes {
        static $inject = ["$routeProvider"];
        static configureRoutes($routeProvider: ng.route.IRouteProvider) {
            $routeProvider.when("/home", { controller: "HumanController", templateUrl: "../App/view/Human.html" });
            $routeProvider.when("/add", { controller: "HiController", templateUrl: "../App/view/MyView.html" });
            $routeProvider.otherwise({ redirectTo: "/home" });
        }
    }
}  