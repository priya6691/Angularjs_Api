/// <reference path="../Scripts/typings/angularjs/angular.d.ts" />
((): void=> {
    var app = angular.module("angularjsApp", ['ngRoute']);
    app.config(angularjsApp.Routes.configureRoutes);
}) ()