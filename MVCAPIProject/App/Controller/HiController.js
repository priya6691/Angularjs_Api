/// <reference path="../Service/HumanService.ts" />
///<reference path="../Interface/HumanInterface.ts"/>
/// <reference path="../../Scripts/typings/angularjs/angular.d.ts" />
////<reference path="../app.module.ts">
/// <reference path="humancontroller.ts" />
var angularjsApp;
(function (angularjsApp) {
    var controllers;
    (function (controllers) {
        var HiController = (function () {
            function HiController(HumanService, $scope) {
                this.HumanService = HumanService;
                $scope.post = function (human) {
                    HumanService.post(human, function (data) {
                        alert("Planet Booking done.");
                    });
                };
            }
            HiController.$inject = ['angularjsApp.services.HumanService', '$scope'];
            return HiController;
        })();
        controllers.HiController = HiController;
    })(controllers = angularjsApp.controllers || (angularjsApp.controllers = {}));
})(angularjsApp || (angularjsApp = {}));
//# sourceMappingURL=HiController.js.map