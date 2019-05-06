var purchaseApp = angular.module("purchaseApp", ["ngRoute"]).config(function($routeProvider){
    $routeProvider.when("/one",
        {
            templateUrl:"./one.html",
        });
    $routeProvider.when('/two',
        {
            templateUrl:'./two.html',
        });
        $routeProvider.otherwise({redirectTo: '/one'});
});


