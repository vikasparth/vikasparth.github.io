angular
    .module('vikasparthApp')
    .config(['$locationProvider', '$routeProvider',
        function appRoutingConfig($locationProvider, $routeProvider) {
            console.log("Inside appRoutingConfig function now");
            debugger;
            $locationProvider.hashPrefix('!');
            $routeProvider
                .when('/', { template: '<whoami></whoami>' })
                //.when('/whoami', { template: '<whoami></whoami>' })
                .when('/Passions', { template: '<passions></passions>' })
                .when('/Resume', { template: '<resume></resume>' })
                .when('/Blogs', { template: '<blogs></blogs>' })
                .otherwise('/');
        }
    ]);