
function nextDown(){

  game.down= game.down + 1;
  console.log("gameodwn  ", game.down);
  return game.down;
}





var HuddleState  = {
         preload: function(){
            game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

            game.load.image('field', 'footballfield.jpg');
            game.load.image('wr1', 'reddot.png');
            game.load.image('wr2', 'reddot.png');
            game.load.image('wr3', 'reddot.png');
            game.load.image('wr4', 'reddot.png');
            game.load.image('qb', 'reddot.png');
            game.load.image('lt', 'bluedot.png');
            game.load.image('lg', 'bluedot.png');
            game.load.image('ct', 'bluedot.png');
            game.load.image('rg', 'bluedot.png');
            game.load.image('rt', 'bluedot.png');
            game.load.image('football','football.png');

          },

          create:  function(){

          console.log("in HuddleState");


          var field = this.game.add.button(15, 50, 'field');
              field.scale.setTo(1.1);
              field.anchor.setTo(0);
// =========================SCOREBOARD CREATED====================================================================

function switchStateToGameAction(){
    game.state.add('GameActionState', GameActionState);
    game.state.start('GameActionState');
    }

function switchStateToHuddle(){
    game.state.add('HuddleState', HuddleState);
    game.state.start('HuddleState');
    }




//create function bracket --- do not erase
},


          update: function(){
;
          }

//-------------************ End Huddle State*********************-------------
};
