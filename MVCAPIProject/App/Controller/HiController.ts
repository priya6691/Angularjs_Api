/// <reference path="../Service/HumanService.ts" />
///<reference path="../Interface/HumanInterface.ts"/>
/// <reference path="../../Scripts/typings/angularjs/angular.d.ts" />
////<reference path="../app.module.ts">
/// <reference path="humancontroller.ts" />


module angularjsApp.controllers {
    export class HiController {
        HumanService: angularjsApp.services.HumanService;
        static $inject = ['angularjsApp.services.HumanService', '$scope'];

        constructor(HumanService: angularjsApp.services.HumanService, $scope) {
            this.HumanService = HumanService;
            $scope.post = function (human) {
                HumanService.post(human, function (data) {
                    alert("Planet Booking done.");
                });
            }
        }
    }
}
