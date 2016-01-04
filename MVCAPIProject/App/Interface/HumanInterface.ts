///<reference path="../Model/HumanModel.ts"/>
module angularjsApp.Interfaces {
    export interface IHuman {
        Delete: (id:number,successCallback: any) =>void;
        Get: (successCallback: any) => void;
        GetById: (id: number, successCallback: any) => void;
        post: (obj: Model.Human, successCallback: any) => void;
        put: (obj: Model.Human, successCallback: any) => void;
        //getProduct: (id: string, successCallback: any) => void;
        //post: (obj: Model.Product, successCallback: any) => void;
        //put: (obj: Model.Product, successCallback: any) => void;
        //deleteProduct: (id: string, successCallback: any) => void;
    }
} 