console.log('bootstate loaded');
var bootState ={

    create : function() {

  


      game.physics.startSystem(Phaser.Physics.ARCADE);



      game.state.start('GameActionState');
    }
};
