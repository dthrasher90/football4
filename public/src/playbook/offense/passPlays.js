
var ifScored;
var playCount = 0;
var qbPassYards = 0;
var wr1Yards = 0;
var wr2Yards = 0;
var wr3Yards = 0;
var wr1RecYards =0;
var wr2RecYards=0;
var wr3RecYards=0;





function switchStateToHuddle(){
    game.state.add('HuddleState', HuddleState);
    game.state.start('HuddleState');
}


function passPlayLeft() {

      playCount = +playCount;
      playCount += 1;

      console.log("playcount = ", playCount);

      if(playCount == 1){

        var ct = game.add.sprite(220, 220, 'ct');
        ct.scale.setTo(0.03);

      } else{

        var ct = game.add.sprite(newBallSpotx, 220, 'ct');
        ct.scale.setTo(0.03);
      }


      passingPlaysDownChecker();

      var QBx = ct.x - 20;
      var QBy = ct.y;
      var qb = this.game.add.sprite(QBx, QBy, 'qb');
      qb.scale.setTo(0.02);
      console.log('qb - ', game);

      var RB1x = ct.x -70;
      var RB1y = ct.y;
      var rb1 = this.game.add.sprite(RB1x, RB1y, 'rb1');
      rb1.scale.setTo(0.02);
      var spriteTextRB1 = game.add.text(RB1x, RB1y, 'RB1', {
          font: '9px Press Start 2P'
      });

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
      var WR3y = ct.y + 50;
      var wr3 = this.game.add.sprite(WR3x, WR3y, 'wr3');
      wr3.scale.setTo(0.02);
      var spriteTextWR3 = game.add.text(WR3x, WR3y, 'WR3', {
          font: '9px Press Start 2P'
      });
      //
      // var DT1x= ct.x - 100;
      // var DT1y = ct.y + 100;
      // var dt1 = this.game.add.sprite(DT1x, DT1y, 'dt1');
      // dt1.scale.setTo(0.05);
      // var spriteTextDT1 = game.add.text(DT1x, DT1y, 'dt1', {
      //     font: '9px Press Start 2P'
      // });



      var football = this.game.add.sprite(ct.x, ct.y, 'football');
            football.scale.setTo(0.08);

      var tweenA = game.add.tween(wr1).to({
          x: '+50'
      }, 700);
      var tweenB = game.add.tween(wr2).to({
          x: '+150'
      }, 700);
      var tweenC = game.add.tween(wr3).to({
          x: '+50'
      }, 700);

      var tweenCA = game.add.tween(wr3).to({
          y: '-100'
      }, 600);

      tweenC.chain(tweenCA);

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
      tweenC.start();
      tweenD.start();
      tweenE.start();
      tweenF.start();
      tweenG.start();
      tweenH.start();


      // Base43Defense();
      // game.physics.arcade.moveToXY(dt1, 100, 100);

      qbPass();
      function qbPass(playCount) {
        //pass play left
          var yards = 0;
          oldBallSpotx = football.x;
          console.log("old spot ", oldBallSpot);
          console.log('wr1 = ',  wr1);

          var x =1;
          // Math.floor((Math.random() * 3) + 1);
          console.log(x);
          switch (x) {

              case 1:


              var tweenFootballA = game.add.tween(football).to({
                  x: '+50',
                  y: '-145'
              }, 1500, "Linear", true, 500);
                  tweenFootballA.start();
                  tweenFootballA.onComplete.add(function newlocation (newBallSpot){



                    newBallSpotx = football.x;
                    newBallSpoty = football.y;

                    var x1 = +newBallSpotx;

                    var x2 = +oldBallSpotx;
                    var yards = +yards;

                    yards = (x1 -x2)/5.2;

                    wr1RecYards = wr1RecYards + yards;

                    wr1Yards = wr1RecYards.toFixed(0);

                    console.log("wr1 stats =  ", wr1Yards);

                    console.log(newBallSpotx, oldBallSpotx, yards);

                    if(football.x >720){
                      console.log("crossed mid field");
                      homeTD();
                    }
                     setTimeout(switchStateToHuddle,1500);
                    return newBallSpotx, newBallSpoty, playCount


                  });

                  console.log('1');

                  break;

              case 2:


              var tweenFootballB = game.add.tween(football).to({
                  x: '+130',
                  y: '-75'
              }, 1000, "Linear", true, 500);
                  tweenFootballB.start();
                  tweenFootballB.onComplete.add(function newlocation (lineOfScrimmage){
                    newBallSpotx = football.x;
                    newBallSpoty = football.y;
                    console.log("new spot ", newBallSpotx, newBallSpoty );

                    var x1 = +newBallSpotx;

                    var x2 = +oldBallSpotx;
                    var yards = +yards;

                    yards = (x1 -x2)/5.2;

                    wr2RecYards = wr2RecYards + yards;

                    wr2Yards = wr2RecYards.toFixed(0);

                    console.log("wr2 stats =  ", wr2Yards);

                    if(football.x >720){
                      console.log("crossed mid field");
                      homeTD();
                    }

                    console.log(newBallSpotx, oldBallSpotx, yards);
                   setTimeout(switchStateToHuddle,1500);

                    return newBallSpotx, newBallSpoty, playCount

                    });
                  console.log('2');

                  break;

              case 3:

              var tweenFootballC = game.add.tween(football).to({
                  x: '+25',
                  y: '-50'
              }, 500, "Linear", true, 1500);
                  tweenFootballC.start();
                  tweenFootballC.onComplete.add(function newlocation (lineOfScrimmage){
                    newBallSpotx = football.x;
                    newBallSpoty = football.y;
                    console.log("new spot ", newBallSpotx, newBallSpoty);
                   setTimeout(switchStateToHuddle,1500);

                    var x1 = +newBallSpotx;

                    var x2 = +oldBallSpotx;
                    var yards = +yards;

                    yards = (x1 -x2)/5.2;

                    wr3RecYards = wr3RecYards + yards;

                    wr3Yards = wr3RecYards.toFixed(0);

                    if(football.x >720){
                      console.log("crossed mid field");
                      homeTD();
                    }

                    console.log("wr3 stats =  ", wr3Yards);
                    return newBallSpotx, newBallSpoty, playCount;





                    });
                  console.log('3');

                  break;

          }
      }


  }

function passPlayRight() {
              playCount = +playCount;
              playCount += 1;

              console.log("playcount = ", playCount);

              if(playCount == 1){

                  var ct = game.add.sprite(220, 220, 'ct');
                  ct.scale.setTo(0.03);

              } else{

                  var ct = game.add.sprite(newBallSpotx, 220, 'ct');
                  ct.scale.setTo(0.03);
              }

              passingPlaysDownChecker();

              var QBx = ct.x - 20;
              var QBy = ct.y;
              var qb = this.game.add.sprite(QBx, QBy, 'qb');
              qb.scale.setTo(0.02);

              var RB1x = ct.x -70;
              var RB1y = ct.y;
              var rb1 = this.game.add.sprite(RB1x, RB1y, 'rb1');
              rb1.scale.setTo(0.02);
              var spriteTextRB1 = game.add.text(RB1x, RB1y, 'RB1', {
                  font: '9px Press Start 2P'
              });

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
              var WR3y = ct.y - 65;
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
              }, 700);

            var tweenB = game.add.tween(wr2).to({
                  x: '+50',
                  y: '+50'
              }, 700);
              var tweenB2 = game.add.tween(wr2).to({
                  y: '+50'
              }, 700);
              tweenB.chain(tweenB2);

              var tweenC = game.add.tween(wr3).to({
                  x: '+100'
              }, 700);
              var tweenC2 = game.add.tween(wr3).to({
                  y: '+50'
              }, 700);
              tweenC.chain(tweenC2);
              var tweenD = game.add.tween(lt).to({
                  x: '-35'
              }, 700);
              var tweenE = game.add.tween(rt).to({
                  x: '-35'
              }, 700);
              var tweenF = game.add.tween(lg).to({
                  x: '-20'
              }, 700);
              var tweenG = game.add.tween(rg).to({
                  x: '-20'
              }, 700);
              var tweenH = game.add.tween(qb).to({
                  x: '-50'
              }, 700);


              tweenA.start();
              tweenB.start();
              tweenC.start();
              tweenD.start();
              tweenE.start();
              tweenF.start();
              tweenG.start();
              tweenH.start();


              // Base43Defense(passPlayLeft, ct);
              qbPass();

              function qbPass(playCount) {


                //pass play right

                  oldBallSpotx = football.x;
                  console.log("old spot ", oldBallSpot);
                  var x =  Math.floor((Math.random() * 3) + 1);
                  console.log(x);

                  switch (x) {

                      case 1:

                      var tweenFootballA = game.add.tween(football).to({
                          x: '+200',
                          y: '+100'
                      }, 700, "Linear", true, 3000);
                          tweenFootballA.start();
                          tweenFootballA.onComplete.add(function newlocation (){

                            newBallSpotx = football.x;
                            newBallSpoty = football.y;
                            console.log("new spot ", newBallSpotx, newBallSpoty);

                            var x1 = +newBallSpotx;

                            var x2 = +oldBallSpotx;
                            var yards = +yards;

                            yards = (x1 -x2)/5.2;

                            wr1RecYards = wr1RecYards + yards;

                            wr1Yards = wr1RecYards.toFixed(0);

                            console.log("wr1 stats =  ", wr1Yards);

                            console.log(newBallSpotx, oldBallSpotx, yards);


                            setTimeout(switchStateToHuddle,3000);
                            return newBallSpotx, newBallSpoty, playCount;
                            });
                          break;

                      case 2:


                      var tweenFootballB = game.add.tween(football).to({
                          x: '+30',
                          y: '+150'
                      },700, "Linear", true, 3500);
                          tweenFootballB.start();
                          tweenFootballB.onComplete.add(function newlocation (){
                                newBallSpotx = football.x;
                                newBallSpoty = football.y;
                                console.log("new spot ", newBallSpotx, newBallSpoty);

                                var x1 = +newBallSpotx;

                                var x2 = +oldBallSpotx;
                                var yards = +yards;

                                yards = (x1 -x2)/5.2;

                                wr2RecYards = wr2RecYards + yards;

                                wr2Yards = wr2RecYards.toFixed(0);

                                console.log("wr2 stats =  ", wr2Yards);

                                 setTimeout(switchStateToHuddle,3000);
                                return newBallSpotx, newBallSpoty, playCount;
                            });
                          console.log('2');


                          break;

                      case 3:

                      var tweenFootballC = game.add.tween(football).to({
                          x: '+90',
                          y: '-20'
                      }, 700, "Linear", true, 3500);
                          tweenFootballC.start();
                          tweenFootballC.onComplete.add(function newlocation (){
                                newBallSpotx = football.x;
                                newBallSpoty = football.y;
                                console.log("new spot ", newBallSpotx, newBallSpoty);

                                var x1 = +newBallSpotx;

                                var x2 = +oldBallSpotx;
                                var yards = +yards;

                                yards = (x1 -x2)/5.2;

                                wr3RecYards = wr3RecYards + yards;

                                wr3Yards = wr3RecYards.toFixed(0);

                                console.log("wr3 stats =  ", wr3Yards);
                                 setTimeout(switchStateToHuddle,3000);
                                return newBallSpotx, newBallSpoty, playCount
                            });
                          console.log('3');

                          break;

                  }
              }

          }

      function passPlayMiddle(){
        playCount = +playCount;
        playCount += 1;

        console.log("playcount = ", playCount);

          if(playCount == 1){

            var ct = game.add.sprite(220, 220, 'ct');
            ct.scale.setTo(0.03);

          } else{

            var ct = game.add.sprite(newBallSpotx, 220, 'ct');
            ct.scale.setTo(0.03);
          }

          passingPlaysDownChecker();

         var QBx = ct.x - 20;
         var QBy = ct.y;
         var qb = this.game.add.sprite(QBx, QBy, 'qb');
         qb.scale.setTo(0.02);

         var RB1x = ct.x -70;
         var RB1y = ct.y;
         var rb1 = this.game.add.sprite(RB1x, RB1y, 'rb1');
         rb1.scale.setTo(0.02);
         var spriteTextRB1 = game.add.text(RB1x, RB1y, 'RB1', {
             font: '9px Press Start 2P'
         });

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
         var WR2y = ct.y -80;
         var wr2 = this.game.add.sprite(WR2x, WR2y, 'wr2');
         wr2.scale.setTo(0.02);
         var spriteTextWR2 = game.add.text(WR2x, WR2y, 'WR2', {
             font: '9px Press Start 2P'
         });

         var WR3x = ct.x - 20;
         var WR3y = ct.y + 90;
         var wr3 = this.game.add.sprite(WR3x, WR3y, 'wr3');
                   wr3.scale.setTo(0.02);
         var spriteTextWR3 = game.add.text(WR3x, WR3y, 'WR3', {
                   font: '9px Press Start 2P'
                  });

         var football = this.game.add.sprite(ct.x, ct.y, 'football');
                  football.scale.setTo(0.08);

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
                function qbPass(playCount) {

                  wr1.body.collideWorldBounds = true;
                  wr2.body.collideWorldBounds = true;
                  wr3.body.collideWorldBounds = true;


                  //pass play middle
                 var x =   Math.floor((Math.random() * 3) + 1);
                 console.log(x);

                 oldBallSpotx = football.x;
                 console.log("old spot = ", oldBallSpot);
                 switch (x) {
                     case 1:
                     var tweenFootballA = game.add.tween(football).to({
                         x: '+100',
                         y: '+45'
                     }, 1000, "Linear", true, 3000);

                         tweenFootballA.start();
                         tweenFootballA.onComplete.add(function newlocation (){
                           newBallSpotx = football.x;
                           newBallSpoty = football.y;
                           console.log("new spot ", newBallSpotx, newBallSpoty);
                           var x1 = +newBallSpotx;

                           var x2 = +oldBallSpotx;
                           var yards = +yards;

                           yards = (x1 -x2)/5.2;

                           wr1RecYards = wr1RecYards + yards;

                           wr1Yards = wr1RecYards.toFixed(0);

                           console.log("wr1 stats =  ", wr1Yards);

                           console.log(newBallSpotx, oldBallSpotx, yards);


                           setTimeout(switchStateToHuddle,3000);
                           return newBallSpotx, newBallSpoty, playCount;
                         });
                         console.log('1');
                         break;

                     case 2:
                     console.log("case 2 right here");
                     var tweenFootballB = game.add.tween(football).to({
                         x: '+75',
                         y: '-125'
                     }, 2000, "Linear", true, 1000);

                         tweenFootballB.start();
                         tweenFootballB.onComplete.add(function newlocation (){
                           newBallSpotx = football.x;
                           newBallSpoty = football.y;
                           console.log("new spot ", newBallSpotx, newBallSpoty);

                           var x1 = +newBallSpotx;

                           var x2 = +oldBallSpotx;
                           var yards = +yards;

                           yards = (x1 -x2)/5.2;

                           wr2RecYards = wr2RecYards + yards;

                           wr2Yards = wr2RecYards.toFixed(0);

                           console.log("wr2 stats =  ", wr2Yards);

                         setTimeout(switchStateToHuddle,3000);
                           return newBallSpotx, newBallSpoty, playCount;
                             });
                         console.log('2');

                     case 3:

                     var tweenFootballC = game.add.tween(football).to({
                         x: '+275',
                         y: '-75'
                     }, 2000, "Linear", true, 1000);
                         tweenFootballC.start();
                         tweenFootballC.onComplete.add(function newlocation (){
                           newBallSpotx = football.x;
                           newBallSpoty = football.y;
                           console.log("new spot ", newBallSpotx, newBallSpoty);

                           var x1 = +newBallSpotx;

                           var x2 = +oldBallSpotx;
                           var yards = +yards;

                           yards = (x1 -x2)/5.2;

                           wr3RecYards = wr3RecYards + yards;

                           wr3Yards = wr3RecYards.toFixed(0);

                           console.log("wr3 stats =  ", wr3Yards);

                           setTimeout(switchStateToHuddle,3000);
                           return newBallSpotx, newBallSpoty, playCount;
                             });
                         console.log('3');
                         break;

                 }
                }

      }
