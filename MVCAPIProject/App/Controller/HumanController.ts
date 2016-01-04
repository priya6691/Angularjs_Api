/// <reference path="../Service/HumanService.ts" />
///<reference path="../Interface/HumanInterface.ts"/>
/// <reference path="../../Scripts/typings/angularjs/angular.d.ts" />
////<reference path="../app.module.ts">


module angularjsApp.controllers {
    
    export class HumanController {
        HumanService: angularjsApp.services.HumanService;
        static $inject = ['angularjsApp.services.HumanService', '$scope'];
        
        constructor(HumanService: angularjsApp.services.HumanService, $scope) {

            var human = new Model.Human()
            this.HumanService = HumanService;
             
            this.HumanService.Get(function (data) { $scope.humanDataset = data; });
            //Get 
            $scope.Get = function (): void {
                HumanService.Get(function (data) { $scope.humanDataset = data; });
            }

            //GetById
            $scope.GetById = function (Id): void {
                HumanService.GetById(Id, function (data) { $scope.human = data; });
            }

            //Delete
            $scope.Delete = function (Id) {
                HumanService.Delete(Id, function () {
                    $scope.Get(function (data) { $scope.humanDataset = data; })
                });
            }

            //Post
            $scope.post = function (human) {
                HumanService.post(human, function (data) {
                    alert("Planet Booking done.");
                    //$scope.Get(function (data) { $scope.humanDataset = data; });
                });
            }
           
            //Put
            $scope.put = function (human) {
                HumanService.put(human, function (data) {
                    $scope.Get(function (data) { $scope.humanDataset = data; });
                });
            }
            
            $scope.getTemplate = function (human) {
                if(human.EID === $scope.selected.EID){   
                    return 'edit';
                    }   
                else return 'display';
            }; 
            $scope.selected = {};
            $scope.edit = function (human) {
                $scope.selected = angular.copy<Model.Human>(human);
            }; 
            
            $scope.reset = function () {
               $scope.selected = {};
            }; 
            
        }
    }
   
    angular.module("angularjsApp").controller("HumanController", HumanController);
    
}
 