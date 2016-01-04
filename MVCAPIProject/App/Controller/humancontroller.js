/// <reference path="../Service/HumanService.ts" />
///<reference path="../Interface/HumanInterface.ts"/>
/// <reference path="../../Scripts/typings/angularjs/angular.d.ts" />
////<reference path="../app.module.ts">
var angularjsApp;
(function (angularjsApp) {
    var controllers;
    (function (controllers) {
        var HumanController = (function () {
            function HumanController(HumanService, $scope) {
                var human = new angularjsApp.Model.Human();
                this.HumanService = HumanService;
                this.HumanService.Get(function (data) { $scope.humanDataset = data; });
                //Get 
                $scope.Get = function () {
                    HumanService.Get(function (data) { $scope.humanDataset = data; });
                };
                //GetById
                $scope.GetById = function (Id) {
                    HumanService.GetById(Id, function (data) { $scope.human = data; });
                };
                //Delete
                $scope.Delete = function (Id) {
                    HumanService.Delete(Id, function () {
                        $scope.Get(function (data) { $scope.humanDataset = data; });
                    });
                };
                //Post
                $scope.post = function (human) {
                    HumanService.post(human, function (data) {
                        alert("Planet Booking done.");
                        //$scope.Get(function (data) { $scope.humanDataset = data; });
                    });
                };
                //Put
                $scope.put = function (human) {
                    HumanService.put(human, function (data) {
                        $scope.Get(function (data) { $scope.humanDataset = data; });
                    });
                };
                $scope.getTemplate = function (human) {
                    if (human.EID === $scope.selected.EID) {
                        return 'edit';
                    }
                    else
                        return 'display';
                };
                $scope.selected = {};
                $scope.edit = function (human) {
                    $scope.selected = angular.copy(human);
                };
                $scope.reset = function () {
                    $scope.selected = {};
                };
            }
            HumanController.$inject = ['angularjsApp.services.HumanService', '$scope'];
            return HumanController;
        })();
        controllers.HumanController = HumanController;
        angular.module("angularjsApp").controller("HumanController", HumanController);
    })(controllers = angularjsApp.controllers || (angularjsApp.controllers = {}));
})(angularjsApp || (angularjsApp = {}));
//# sourceMappingURL=humancontroller.js.map