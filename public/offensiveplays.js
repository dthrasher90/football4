function hithere(){
  console.log("hello from offensive plays!");
}

// function qbPass(tweenFootballA, tweenFootballB, tweenFootballC) {
//
//
//     var x = Math.floor((Math.random() * 3) + 1);
//     console.log(x);
//     switch (x) {
//
//         case 1:
//
//             tweenFootballA.start();
//             tweenFootballA.onComplete(los, this); function los(){
//               console.log("line of scrimmage = ", lineOfScrimmage);
//             }
//             console.log('1');
//             break;
//
//         case 2:
//             tweenFootballB.start();
//             tweenFootballB.onComplete(los, this); function los(){
//               console.log("line of scrimmage = ", lineOfScrimmage);
//             }
//             console.log('2');
//             break;
//
//         case 3:
//             tweenFootballC.start();
//             tweenFootballC.onComplete(los, this); function los(){
//               console.log("line of scrimmage = ", lineOfScrimmage);
//             }
//             console.log('3');
//             break;
//
//     }
// }

function passPlayLeft() {


    var ct = this.game.add.sprite(100, 220, 'ct');
    ct.scale.setTo(0.03);
    var QBx = ct.x - 20;
    var QBy = ct.y;
    var qb = this.game.add.sprite(QBx, QBy, 'qb');
    qb.scale.setTo(0.02);

    var RGx = ct.x;
    var RGy = ct.y + 20;

    var rg = this.game.add.sprite(RGx, RGy, 'rg');
    rg.scale.setTo(0.03);
    var spriteTextRG = game.add.text(RGx, RGy, 'RG', {
        font: '9px Press Start 2P'
    });


    var RTx = ct.x;
    var RTy = rg.y + 20;
    var rt = this.game.add.sprite(RTx, RTy, 'rt');
    rt.scale.setTo(0.03);
    var spriteTextRT = game.add.text(RTx, RTy, 'RT', {
        font: '9px Press Start 2P'
    });

    var LGx = ct.x;
    var LGy = ct.y - 20;
    var lg = this.game.add.sprite(LGx, LGy, 'lg');
    lg.scale.setTo(0.03);
    var spriteTextLG = game.add.text(LGx, LGy, 'LG', {
        font: '9px Press Start 2P'
    });


    var LTx = ct.x;
    var LTy = lg.y - 20;
    var lt = this.game.add.sprite(LTx, LTy, 'lt');
    lt.scale.setTo(0.03);
    var spriteTextLT = game.add.text(LTx, LTy, 'LT', {
        font: '9px Press Start 2P'
    });


    var WR1x = ct.x;
    var WR1y = ct.y - 150;
    var wr1 = this.game.add.sprite(WR1x, WR1y, 'wr1');
    wr1.scale.setTo(0.02);
    var spriteTextWR1 = game.add.text(WR1x, WR1y, 'WR1', {
        font: '9px Press Start 2P'
    });


    var WR2x = ct.x - 20;
    var WR2y = ct.y - 80;
    var wr2 = this.game.add.sprite(WR2x, WR2y, 'wr2');
    wr2.scale.setTo(0.02);
    var spriteTextWR2 = game.add.text(WR2x, WR2y, 'WR2', {
        font: '9px Press Start 2P'
    });

    var WR3x = ct.x - 20;
    var WR3y = ct.y - 50;
    var wr3 = this.game.add.sprite(WR3x, WR3y, 'wr3');
    wr3.scale.setTo(0.02);
    var spriteTextWR3 = game.add.text(WR3x, WR3y, 'WR3', {
        font: '9px Press Start 2P'
    });






    var football = this.game.add.sprite(ct.x, ct.y, 'football');
          football.scale.setTo(0.08);

    // lineOfScrimmage = football.y;
    // console.log("los = " + lineOfScrimmage);



    var tweenA = game.add.tween(wr1).to({
        x: '+200'
    }, 1700);
    var tweenB = game.add.tween(wr2).to({
        x: '+200'
    }, 1500);
    var tweenC = game.add.tween(wr3).to({
        x: '+200'
    }, 3000);

    var tweenD = game.add.tween(lt).to({
        x: '-35'
    }, 2000);
    var tweenE = game.add.tween(rt).to({
        x: '-35'
    }, 2000)
    var tweenF = game.add.tween(lg).to({
        x: '-20'
    }, 2000);
    var tweenG = game.add.tween(rg).to({
        x: '-20'
    }, 200);


    var tweenH = game.add.tween(qb).to({
        x: '-50'
    }, 1800);





    tweenA.start();
    tweenB.start();
    // tweenC.start();

    tweenD.start();
    tweenE.start();
    tweenF.start();
    tweenG.start();
    tweenH.start();

    Base43Defense(passPlayLeft, ct);
    game.physics.arcade.enable([qb, wr1, wr2, wr3, ct, rg, rt, lg, lt]);
    qbPass();
    function qbPass() {


        var x = Math.floor((Math.random() * 3) + 1);
        console.log(x);
        switch (x) {

            case 1:

            var tweenFootballA = game.add.tween(football).to({
                x: '+100',
                y: '-150'
            }, 3000);
                tweenFootballA.start();
                tweenFootballA.onComplete.add(los, this);
                function los(){
                  lineOfScrimmage = football.y;
                  console.log("line of scrimmage = ", lineOfScrimmage);
                }
                console.log('1');
                break;

            case 2:


            var tweenFootballB = game.add.tween(football).to({
                x: '+100',
                y: '-50'
            }, 3000);
                tweenFootballB.start();
                tweenFootballB.onComplete.add(los, this);
                function los(){
                   lineOfScrimmage = football.y;
                  console.log("line of scrimmage = ", lineOfScrimmage);
                }
                console.log('2');
                break;

            case 3:

            var tweenFootballC = game.add.tween(football).to({
                x: '+100',
                y: '-100'
            }, 3000);
                tweenFootballC.start();
                tweenFootballC.onComplete.add(los, this);
                function los(){

                   lineOfScrimmage = football.y;
                  console.log("line of scrimmage = ", lineOfScrimmage);
                }
                console.log('3');
                break;

        }
    }


}

function passPlayRight(lineOfScrimmage) {



    var ct = this.game.add.sprite(400, 220, 'ct');
    ct.scale.setTo(0.03);


    var QBx = ct.x - 20;
    var QBy = ct.y;
    var qb = this.game.add.sprite(QBx, QBy, 'qb');
    qb.scale.setTo(0.02);

    var RGx = ct.x;
    var RGy = ct.y + 20;
    var rg = this.game.add.sprite(RGx, RGy, 'rg');
    rg.scale.setTo(0.03);
    var spriteTextRG = game.add.text(RGx, RGy, 'RG', {
        font: '9px Press Start 2P'
    });


    var RTx = ct.x;
    var RTy = ct.y + 20;
    var rt = this.game.add.sprite(RTx, RTy, 'rt');
    rt.scale.setTo(0.03);
    var spriteTextRT = game.add.text(RTx, RTy, 'RT', {
        font: '9px Press Start 2P'
    });

    var LGx = ct.x;
    var LGy = ct.y - 20;
    var lg = this.game.add.sprite(LGx, LGy, 'lg');
    lg.scale.setTo(0.03);
    var spriteTextLG = game.add.text(LGx, LGy, 'LG', {
        font: '9px Press Start 2P'
    });


    var LTx = ct.x;
    var LTy = ct.y - 20;
    var lt = this.game.add.sprite(LTx, LTy, 'lt');
    lt.scale.setTo(0.03);
    var spriteTextLT = game.add.text(LTx, LTy, 'LT', {
        font: '9px Press Start 2P'
    });


    var WR1x = ct.x;
    var WR1y = ct.y + 100;
    var wr1 = this.game.add.sprite(WR1x, WR1y, 'wr1');
    wr1.scale.setTo(0.02);
    var spriteTextWR1 = game.add.text(WR1x, WR1y, 'WR1', {
        font: '9px Press Start 2P'
    });


    var WR2x = ct.x - 20;
    var WR2y = ct.y + 50;
    var wr2 = this.game.add.sprite(WR2x, WR2y, 'wr2');
    wr2.scale.setTo(0.02);
    var spriteTextWR2 = game.add.text(WR2x, WR2y, 'WR2', {
        font: '9px Press Start 2P'
    });

    var WR3x = ct.x - 20;
    var WR3y = ct.y + 50;
    var wr3 = this.game.add.sprite(WR3x, WR3y, 'wr3');
    wr3.scale.setTo(0.02);
    var spriteTextWR3 = game.add.text(WR3x, WR3y, 'WR3', {
        font: '9px Press Start 2P'
    });


    var football = this.game.add.sprite(ct.x, ct.y, 'football');
    football.scale.setTo(0.08);

    game.physics.arcade.enable([qb, wr1, wr2, wr3, ct, rg, rt, lg, lt, football]);




    var tweenA = game.add.tween(wr1).to({
        x: '+200'
    }, 3000);



    var tweenB = game.add.tween(wr2).to({
        x: '+50',
        y: '+50'
    }, 2000);
    var tweenB2 = game.add.tween(wr2).to({
        y: '+50'
    }, 2000);
    tweenB.chain(tweenB2);

    var tweenC = game.add.tween(wr3).to({
        x: '+100'
    }, 2000);
    var tweenC2 = game.add.tween(wr3).to({
        y: '+50'
    }, 2000);
    tweenC.chain(tweenC2);
    var tweenD = game.add.tween(lt).to({
        x: '-35'
    }, 2000);
    var tweenE = game.add.tween(rt).to({
        x: '-35'
    }, 2000)
    var tweenF = game.add.tween(lg).to({
        x: '-20'
    }, 2000);
    var tweenG = game.add.tween(rg).to({
        x: '-20'
    }, 2000);
    var tweenH = game.add.tween(qb).to({
        x: '-50'
    }, 1800);


    tweenA.start();
    tweenB.start();
    tweenC.start();
    tweenD.start();
    tweenE.start();
    tweenF.start();
    tweenG.start();
    tweenH.start();


    Base43Defense(passPlayLeft, ct);
    qbPass();

    function qbPass() {
        var lineOfScrimmage = football.y;
        console.log("original line of scrimmage=  "+ lineOfScrimmage);
        var x = Math.floor((Math.random() * 3) + 1);
        console.log(x);
        switch (x) {

            case 1:

            var tweenFootballA = game.add.tween(football).to({
                x: '+100',
                y: '+150'
            }, 3000);
                tweenFootballA.start();
                tweenFootballA.onComplete.add(los, this);
                function los(){
                  var lineOfScrimmage = football.y;
                  console.log("line of scrimmage = ", lineOfScrimmage);
                }
                console.log('1');
                break;

            case 2:


            var tweenFootballB = game.add.tween(football).to({
                x: '+100',
                y: '+200'
            }, 3000);
                tweenFootballB.start();
                tweenFootballB.onComplete.add(los, this);
                function los(){
                  var lineOfScrimmage = football.y;
                  console.log("line of scrimmage = ", lineOfScrimmage);
                }
                console.log('2');
                break;

            case 3:

            var tweenFootballC = game.add.tween(football).to({
                x: '+100',
                y: '+300'
            }, 3000);
                tweenFootballC.start();
                tweenFootballC.onComplete.add(los, this);
                function los(){
                  var lineOfScrimmage = football.y;
                  console.log("line of scrimmage = ", lineOfScrimmage);
                }
                console.log('3');
                break;

        }
    }

}

// ============================
//==============================
//===========================

 function passPlayMiddle(){
      var ct = this.game.add.sprite(400, 220, 'ct');
      ct.scale.setTo(0.03);

      var QBx = ct.x - 20;
      var QBy = ct.y;
      var qb = this.game.add.sprite(QBx, QBy, 'qb');
      qb.scale.setTo(0.02);

      var RGx = ct.x;
      var RGy = ct.y + 20;
      var rg = this.game.add.sprite(RGx, RGy, 'rg');
      rg.scale.setTo(0.03);
      var spriteTextRG = game.add.text(RGx, RGy, 'RG', {
          font: '9px Press Start 2P'
      });

      var RTx = ct.x;
      var RTy = rg.y + 20;
      var rt = this.game.add.sprite(RTx, RTy, 'rt');
      rt.scale.setTo(0.03);
      var spriteTextRT = game.add.text(RTx, RTy, 'RT', {
          font: '9px Press Start 2P'
      });


      var LGx = ct.x;
      var LGy = ct.y - 20;
      var lg = this.game.add.sprite(LGx, LGy, 'lg');
      lg.scale.setTo(0.03);
      var spriteTextLG = game.add.text(LGx, LGy, 'LG', {
          font: '9px Press Start 2P'
      });


      var LTx = ct.x;
      var LTy = lg.y - 20;
      var lt = this.game.add.sprite(LTx, LTy, 'lt');
      lt.scale.setTo(0.03);
      var spriteTextLT = game.add.text(LTx, LTy, 'LT', {
          font: '9px Press Start 2P'
      });


      var WR1x = ct.x;
      var WR1y = rt.y + 100;
      var wr1 = this.game.add.sprite(WR1x, WR1y, 'wr1');
      wr1.scale.setTo(0.02);
      var spriteTextWR1 = game.add.text(WR1x, WR1y, 'WR1', {
          font: '9px Press Start 2P'
      });

      var WR2x = ct.x - 20;
      var WR2y = ct.y + 50;
      var wr2 = this.game.add.sprite(WR2x, WR2y, 'wr2');
      wr2.scale.setTo(0.02);
      var spriteTextWR2 = game.add.text(WR2x, WR2y, 'WR2', {
          font: '9px Press Start 2P'
      });

      var WR3x = ct.x - 20;
      var WR3y = rt.y + 50;
      var wr3 = this.game.add.sprite(WR3x, WR3y, 'wr3');
                wr3.scale.setTo(0.02);
      var spriteTextWR3 = game.add.text(WR2x, WR2y, 'WR3', {
                font: '9px Press Start 2P'
               });

      var football = this.game.add.sprite(ct.x, ct.y, 'football');
               football.scale.setTo(0.08);

    //  game.physics.arcade.enable([qb, wr1, wr2, wr3, ct, rg, rt, lg, lt, ct, football]);


            var tweenA = game.add.tween(wr1).to({
                x: '+100'
            }, 2000);
            var tweenA2 = game.add.tween(wr1).to({
                y: '-100'
            }, 2000);
            tweenA.chain(tweenA2);

            var tweenB = game.add.tween(wr2).to({
                x: '+300'
            }, 3000);

            var tweenC = game.add.tween(wr3).to({
                x: '+200'
            }, 2000);
            var tweenC2 = game.add.tween(wr3).to({
                y: '-200'
            }, 2000);
            tweenC.chain(tweenC2);




tweenA.start();
tweenB.start();
tweenC.start();
qbPass();
function qbPass() {


    var x = Math.floor((Math.random() * 3) + 1);
    console.log(x);


    console.log('original line == ', lineOfScrimmage);
    switch (x) {

        case 1:
        var tweenFootballA = game.add.tween(football).to({
            x: '+100',
            y: '+150'
        }, 3000);
            tweenFootballA.start();
            tweenFootballA.onComplete.add(los, this);
            function los(){
              var lineOfScrimmage = football.y;
              console.log("line of scrimmage = ", lineOfScrimmage);
            }
            console.log('1');;
            break;

        case 2:

        var tweenFootballB = game.add.tween(football).to({
            x: '+100',
            y: '+250'
        }, 3000);
            tweenFootballB.start();
            tweenFootballB.onComplete.add(los, this);

            function los(){
              var lineOfScrimmage = football.y;
              console.log("line of scrimmage = ", lineOfScrimmage);
            }

            console.log('2');

        case 3:

        var tweenFootballC = game.add.tween(football).to({
            x: '+100',
            y: '+350'
        }, 3000);
            tweenFootballC.start();
            tweenFootballC.onComplete.add(los, this);

            function los(){
              var lineOfScrimmage = football.y;
              console.log("line of scrimmage = ", lineOfScrimmage);
            }

            console.log('3');
            break;

    }
}

}
