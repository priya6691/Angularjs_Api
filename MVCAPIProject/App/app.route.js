/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-route.d.ts" />
var angularjsApp;
(function (angularjsApp) {
    var Routes = (function () {
        function Routes() {
        }
        Routes.configureRoutes = function ($routeProvider) {
            $routeProvider.when("/home", { controller: "HumanController", templateUrl: "../App/view/Human.html" });
            $routeProvider.when("/add", { controller: "HiController", templateUrl: "../App/view/MyView.html" });
            $routeProvider.otherwise({ redirectTo: "/home" });
        };
        Routes.$inject = ["$routeProvider"];
        return Routes;
    })();
    angularjsApp.Routes = Routes;
})(angularjsApp || (angularjsApp = {}));
//# sourceMappingURL=app.route.js.map