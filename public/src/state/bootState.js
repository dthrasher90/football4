console.log('bootstate loaded');
var bootState ={

    create : function() {




      game.physics.startSystem(Phaser.Physics.ARCADE);


      game.state.add('GameActionState', GameActionState);

      game.state.start('GameActionState');
    }
};
