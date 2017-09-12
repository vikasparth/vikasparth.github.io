angular.module('whoami')
    .component('whoami', {
        //template: '<div>{{$ctrl.aboutme}}</div>',
        templateUrl: '/app/whoami/whoami.html',
        controller: ['$http',function whoami($http) {
            var self = this;
            $http.get('/app/data/whoami.json').then(function fetchwhoamiJson(response) {
                self.aboutme = response.data.aboutme;
            });

            //this.aboutme = "Hello I am Vikas Sharma";
        }
            ]
    });