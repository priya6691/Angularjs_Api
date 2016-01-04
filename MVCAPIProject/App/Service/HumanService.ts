/// <reference path="../../Scripts/typings/angularjs/angular.d.ts" />
///<reference path="../Interface/HumanInterface.ts"/>
///<reference path="../Model/HumanModel.ts"/>


module angularjsApp.services
{
    export class HumanService implements Interfaces.IHuman
    {
        httpService: ng.IHttpService;
        static $inject = ['$http']
        constructor($http) 
        { this.httpService = $http }
        
        Delete(id: number, successCallback: any): void {
            this.httpService.delete('/api/devicemanage/' +id).success(function () {
                successCallback();
            });
        }
        Get(successCallback:Function): void {
           this.httpService.get('/api/DeviceManage').success(function (data) {
                successCallback(data);
            });
        }
        GetById(id: number, successCallback: any) : void{
                this.httpService.get('/api/DeviceManage',id).success(function (data) {
                    successCallback(data);
            });
        }
        post(obj: Model.Human, successCallback: any): void {
            this.httpService.post('/api/DeviceManage', obj).success(function (data) {
                successCallback();
            });
        }
        put(obj: Model.Human, successCallback: any): void {
            this.httpService.put('/api/DeviceManage', obj).success(function (data) {
                successCallback();
            });
        }
    }
    angular.module("angularjsApp").service("angularjsApp.services.HumanService", HumanService);
} 