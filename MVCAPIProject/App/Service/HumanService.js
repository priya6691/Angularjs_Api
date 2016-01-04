/// <reference path="../../Scripts/typings/angularjs/angular.d.ts" />
///<reference path="../Interface/HumanInterface.ts"/>
///<reference path="../Model/HumanModel.ts"/>
var angularjsApp;
(function (angularjsApp) {
    var services;
    (function (services) {
        var HumanService = (function () {
            function HumanService($http) {
                this.httpService = $http;
            }
            HumanService.prototype.Delete = function (id, successCallback) {
                this.httpService.delete('/api/devicemanage/' + id).success(function () {
                    successCallback();
                });
            };
            HumanService.prototype.Get = function (successCallback) {
                this.httpService.get('/api/DeviceManage').success(function (data) {
                    successCallback(data);
                });
            };
            HumanService.prototype.GetById = function (id, successCallback) {
                this.httpService.get('/api/DeviceManage', id).success(function (data) {
                    successCallback(data);
                });
            };
            HumanService.prototype.post = function (obj, successCallback) {
                this.httpService.post('/api/DeviceManage', obj).success(function (data) {
                    successCallback();
                });
            };
            HumanService.prototype.put = function (obj, successCallback) {
                this.httpService.put('/api/DeviceManage', obj).success(function (data) {
                    successCallback();
                });
            };
            HumanService.$inject = ['$http'];
            return HumanService;
        })();
        services.HumanService = HumanService;
        angular.module("angularjsApp").service("angularjsApp.services.HumanService", HumanService);
    })(services = angularjsApp.services || (angularjsApp.services = {}));
})(angularjsApp || (angularjsApp = {}));
//# sourceMappingURL=HumanService.js.map