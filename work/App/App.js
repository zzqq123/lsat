const app = angular.module('app',['ui.router']);
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $stateProvider
    .state('login',{
        url:'/login',
        templateUrl:'App/View/login.html',
        resolve:{
            data:function(baseConfig){
                return baseConfig.ajax('http://localhost:8090/data').then(function(result){
                    return result.data;
                })
            }
        },
        controller:'loginController'
    })
    $urlRouterProvider.otherwise('/login');
}])