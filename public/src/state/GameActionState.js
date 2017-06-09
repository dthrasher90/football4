



var GameActionState  = {
   preload: function(){
      // game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
      // game.load.script('defensiveplays', '/playbook/defense/defensiveplays.js');
      game.load.image('field', 'footballfield.jpg');
      game.load.image('wr1', 'reddot.png');
      game.load.image('wr2', 'reddot.png');
      game.load.image('wr3', 'reddot.png');
      game.load.image('wr4', 'reddot.png');
      game.load.image('te1', 'reddot.png');
      game.load.image('te2', 'reddot.png');
      game.load.image('qb', 'reddot.png');
      game.load.image('rb1', 'reddot.png');
      game.load.image('lt', 'bluedot.png');
      game.load.image('lg', 'bluedot.png');
      game.load.image('ct', 'bluedot.png');
      game.load.image('rg', 'bluedot.png');
      game.load.image('rt', 'bluedot.png');
      game.load.image('de1', 'purpledot.png');
      game.load.image('de2', 'purpledot.png');
      game.load.image('dt1', 'purpledot.png');
      game.load.image('dt2', 'purpledot.png');
      game.load.image('cb1', 'greydot.png');
      game.load.image('cb2', 'greydot.png');
      game.load.image('fs', 'greydot.png');
      game.load.image('ss', 'greydot.png');
      game.load.image('mlb', 'orangedot.png');
      game.load.image('wlb', 'orangedot.png');
      game.load.image('slb', 'orangedot.png');
      game.load.image('football','football.png');
      game.load.image('marker', 'orangesquare.png');
      game.load.image('marker2', 'orangesquare.png');



    },



//================================HUD Graphics ===============================================================
  create: function(){

          game.world.setBounds();




          var field = game.add.sprite(15, 50, 'field');
              field.scale.setTo(1.1);
              field.anchor.setTo(0);

          // var marker = game.add.sprite(0,0,'marker');
          //        marker.scale.setTo(0.02);

          function switchStateToCoachScreen(){
              game.state.add('HuddleState', HuddleState);
              game.state.start('HuddleState');
              }

//end of create brackets -------------
},

//============================GameButtons===========================================================


    update: function(ct, newBallSpotx){




//end update brackt
},


};
