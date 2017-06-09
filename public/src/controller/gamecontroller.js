
var myapp = angular.module('myApp', ['ui.router', 'ngRoute']);


myapp.config(function($stateProvider) {

            var playbookState = {
             name: 'playbook',
             url: '/playbook',
             templateUrl :'src/partials/playbook.html'
           }

           var coachState = {
             name: 'coach',
             url: '/coach',
             templateUrl: 'src/partials/coach.html'
           }

          var rosterState = {
            name: 'depthchart',
            url: '/depthchart',
            templateUrl: 'src/partials/depthchart.html'
          }

          var gamestatState = {
            name: 'gamestat',
            url: '/gamestat',
            templateUrl: 'src/partials/gamestats.html'
          }



         $stateProvider.state(playbookState);
         $stateProvider.state(coachState);
         $stateProvider.state(rosterState);
         $stateProvider.state(gamestatState);



        //end brackets
});
app.controller('startCtr', ['$scope', function($scope){






}]);
