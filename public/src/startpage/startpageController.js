


var app = angular.module("app", ['ngRoute','ui.router','ngStorage']);


app.config(function($routeProvider) {
    $routeProvider


        .when("/", {
            templateUrl: "newteam.html",
            controller: "startCtrl"
        })
        .when("/playerselect", {
            templateUrl: "playerSelect.html",
            controller: "startCtrl"
        })

        .when("/gamescreen", {
            templateUrl: "gamescreen.html",
            controller: "startCtrl"
        })

        .when("/teamhome", {
            templateUrl: "teamHome.html",
            controller: "startCtrl"

        });




});

app.config(function($stateProvider) {




    var playbookState = {
        name: 'playbook',
        url: '#!playbook',
        templateUrl: 'src/partials/playbook.html'
    }

    var coachState = {
        name: 'coach',
        url: '#!coach',
        templateUrl: 'src/partials/coach.html'
    }

    var rosterState = {
        name: 'depthchart',
        url: '#!depthchart',
        templateUrl: 'src/partials/depthchart.html'
    }

    var gamestatState = {
        name: 'gamestat',
        url: '#!gamestat',
        templateUrl: 'src/partials/gamestats.html'
    }



    $stateProvider.state(playbookState);
    $stateProvider.state(coachState);
    $stateProvider.state(rosterState);
    $stateProvider.state(gamestatState);


});




app.controller('startCtrl', ['$scope', '$localStorage', function($scope, $localStorage){


    $scope.myTeam1= [];
    $scope.myTeam=[];
    $scope.players=[];
    $scope.newteam=[];
    $scope.start = function(){}







function characterGen(){
  for(i = 0; i < 75; i++){

  chance.mixin({
      'user': function() {
          return {
              first: chance.first({gender: "male"}),
              last: chance.last(),
              position:  chance.pickone(['QB', 'RB', 'WR', 'MLB', 'DE']),
              college: chance.pickone(['Alabama','Arkansas', 'Florida', 'Kentucky', 'LSU', 'Mississippi St', 'Ole Miss', 'Texas A&M', 'Mississippi', 'S. Carolina',
               'Tennessee', 'Georgia', 'Missouri', 'Vanderbilt', 'Boston College', 'Clemson', 'Florida St', 'Louisville', 'Notre Dame', 'Syracuse', 'Wake Forest',
               'Duke', 'Miami', 'Pittsburg', 'Virginia', 'Maryland',
               'Indiana', 'Michigan', 'Ohio St', 'Michigan St', 'Penn St', 'Rutgers', 'Illinois', 'Iowa', 'Minnesota', 'Nebraska', 'Northwestern', 'Purdue', 'Wisconsin',
               'Baylor', 'Iowa St', 'Kansas', 'Kansas St', 'Oklahoma', 'Oklahoma St', 'TCU', 'Texas Tech', 'W. Virginia',
               'Arizona', 'Arizona St', 'UCLA', 'Oregon', 'Oregon St', 'S. Cal', 'Stanford', 'Utah', 'Washington', 'Wyoming', 'BYU'
                ]),
              height:  chance.pickone(["5'11", "6'", "6'1", "6'2", "6'3", "6'4"]),
              weight: chance.natural({min: 195, max: 210}),
              Str: chance.rpg('4d6', {sum: true}),
              Con: chance.rpg('4d6', {sum: true}),
              Dex: chance.rpg('4d6', {sum: true}),
              Int: chance.rpg('4d6', {sum: true}),
              Wis: chance.rpg('4d6', {sum: true}),
              Cha: chance.rpg('4d6', {sum: true}),
              id: chance.string({length: 12})
          };
      }
  });



  var player =  chance.user();
        // console.log(player);

$scope.players.push({

      first: player.first,
      last: player. last,
      height:player.height,
      weight: player.weight,
      position: player.position,
      college: player.college,
      Str : player.Str,
      Con: player.Con,
      Dex: player.Dex,
      Int: player.Int,
      Wis: player.Wis,
      Cha: player.Cha,
      id: player.id
  });

  }

}
characterGen();


// Player add variables
$scope.QBCount=0;
$scope.RBCount=0;
$scope.WRCount=0;
$scope.MLBCount=0;
$scope.DECount=0;


$scope.button1 = function(myTeam){


    if(this.player.position == 'QB'){
        $scope.QBCount = $scope.QBCount +1;

          if ($scope.QBCount > 1){
            // alert("drop a qn");
          }


    } else if(this.player.position == 'WR'){

       $scope.WRCount = $scope.WRCount + 1;

         if ($scope.WRCount > 2){
          //  alert("drop a WR");
         }

    } else if(this.player.position == 'RB'){

       $scope.RBCount = $scope.RBCount + 1;

         if ($scope.RBCount > 2){
          //  alert("drop a RB");
         }

    } else if(this.player.position == 'DE'){

       $scope.DECount =$scope.DECount + 1;

         if ($scope.DECount > 2){
          //  alert("drop a DE");
         }

    } else if(this.player.position == 'MLB'){

      $scope.MLBCount = $scope.MLBCount + 1;

        if ($scope.MLBCount > 1){
          // alert("drop a MLB");
        }
    }




    console.log(this.player.college);
    $scope.newteam.push({
        first: this.player.first,
        last: this.player.last,
        height:this.player.height,
        weight: this.player.weight,
        position: this.player.position,
        college:  this.player.college,
        Str : this.player.Str,
        Con: this.player.Con,
        Dex: this.player.Dex,
        Int: this.player.Int,
        Wis: this.player.Wis,
        Cha: this.player.Cha,
        id: this.player.id
    });


    console.log($scope.newteam);

  };

$scope.save = function(team1) {


  var myteam = $scope.newteam;

  var team1 = JSON.stringify(myteam);

  $localStorage.myteam = team1;
  console.log("team 1", team1);



}


$scope.load= function(){

//
//   var team2 =
//   console.log(team2);
//
// = team2;

}

$scope.yo = JSON.parse($localStorage.myteam);
    console.log($scope.yo)

}]);
