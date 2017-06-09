
function runPlayMiddle(){


      playCount = +playCount;
      playCount += 1;
      console.log("playcount = ", playCount);

        if(playCount == 1){

          var ct = game.add.sprite(220, 220, 'ct');
          ct.scale.setTo(0.03);
          // this.game.physics.arcade.enable(ct, Phaser.Physics.ARCADE);


        } else{

          var ct = game.add.sprite(newBallSpotx, 220, 'ct');
          ct.scale.setTo(0.03);
          // this.game.physics.arcade.enable(ct, Phaser.Physics.ARCADE);
        }


      runningPlaysDownChecker();

      Base43Defense(ct);


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
       this.game.physics.arcade.enable(rg, Phaser.Physics.ARCADE);



       var RTx = ct.x;
       var RTy = rg.y + 20;
       var rt = this.game.add.sprite(RTx, RTy, 'rt');
       rt.scale.setTo(0.03);
       var spriteTextRT = game.add.text(RTx, RTy, 'RT', {
           font: '9px Press Start 2P'
       });
       this.game.physics.arcade.enable(rt, Phaser.Physics.ARCADE);


       var LGx = ct.x;
       var LGy = ct.y - 20;
       var lg2 = this.game.add.sprite(LGx, LGy, 'lg');
       lg2.scale.setTo(0.03);
       var spriteTextLG = game.add.text(LGx, LGy, 'LG', {
           font: '9px Press Start 2P'
       });
       this.game.physics.arcade.enable(lg2, Phaser.Physics.ARCADE);
       lg2.body.velocity.x = +20;
       lg2.body.checkCollision.right = true;

       console.log('lg2 =========== ', lg2);

       var LGx = ct.x;
       var LGy = ct.y - 60;
       var lg5 = this.game.add.sprite(LGx, LGy, 'lg');
       lg5.scale.setTo(0.03);
       var spriteTextLG = game.add.text(LGx, LGy, 'LG', {
           font: '9px Press Start 2P'
       });
       this.game.physics.arcade.enable(lg5, Phaser.Physics.ARCADE);
      //  lg5.body.velocity.y = + 300;
      //  console.log('lg5 =========== ', lg2);



       var LTx = ct.x;
       var LTy = ct.y - 40;
       var lt = this.game.add.sprite(LTx, LTy, 'lt');
       lt.scale.setTo(0.03);
       var spriteTextLT = game.add.text(LTx, LTy, 'LT', {
           font: '9px Press Start 2P'
       });
       lt.game.physics.arcade.enable(lt, Phaser.Physics.ARCADE);
       lt.body.velocity.x= +200;



       var DT1x = ct.x + 40;
       var DT1y = ct.y  -20;
       var x53= this.game.add.sprite(DT1x, DT1y, 'dt1');
               x53.scale.setTo(0.061);
       var spriteTextDT1 = game.add.text(DT1x, DT1y, 'DT1', {font: '9px Press Start 2P'});
       x53.game.physics.arcade.enable(x53, Phaser.Physics.ARCADE);
       console.log('x53', x53);
       x53.body.velocity.x = -50;





       var WR1x = ct.x -10;
       var WR1y = ct.y - 150;
       var wr1 = this.game.add.sprite(WR1x, WR1y, 'wr1');
       wr1.scale.setTo(0.02);
       var spriteTextWR1 = game.add.text(WR1x, WR1y, 'WR1', {
           font: '9px Press Start 2P'
       });


       var WR2x = ct.x -10;
       var WR2y = ct.y +140;
       var wr2 = this.game.add.sprite(WR2x, WR2y, 'wr2');
       wr2.scale.setTo(0.02);
       var spriteTextWR2 = game.add.text(WR2x, WR2y, 'WR2', {
           font: '9px Press Start 2P'
       });

       var TE1x = ct.x;
       var TE1y = ct.y - 62;
       var te1 = this.game.add.sprite(TE1x, TE1y, 'te1');
       te1.scale.setTo(0.02);
       var spriteTextTE1 = game.add.text(TE1x, TE1y, 'TE1', {
           font: '9px Press Start 2P'
       });

       var TE2x = ct.x;
       var TE2y = ct.y + 62;
       var te2 = this.game.add.sprite(TE2x, TE2y, 'te2');
       te2.scale.setTo(0.02);
       var spriteTextTE2 = game.add.text(TE2x, TE2y, 'TE2', {
           font: '9px Press Start 2P'
       });



       var football = this.game.add.sprite(ct.x, ct.y, 'football');
             football.scale.setTo(0.08);

      //  Base43Defense(runPlayMiddle, ct);

       //Run middle
             var tweenA = game.add.tween(qb).to({
                 x: '-80'
             }, 700);

             var tweenB = game.add.tween(rb1).to({
                 x: '+50'
             }, 700);

             var tweenC = game.add.tween(wr1).to({
                x: '+60'
             }, 700);

             var tweenD = game.add.tween(wr2).to({
                x: '+60'
             }, 700);

             var tweenE = game.add.tween(lt).to({
                x: '+`10'
             }, 700);
             //
            //  var tweenF = game.add.tween(lg).to({
            //     x: '+10'
            //  }, 700);

             var tweenG = game.add.tween(rg).to({
               x: '+10'
             }, 700);

             var tweenH = game.add.tween(lt).to({
               x: '+10'
             }, 700);
            //  game.physics.arcade.enable([qb, wr1, wr2, te1, te2, rb1, ct, rg, rt, lg, lt]);
             tweenA.start();
             tweenB.start();
             tweenB.onComplete.add(function newlocation (){

             rbChoice();

                  setTimeout(switchStateToHuddle,3000);

                 });

             tweenC.start();
             tweenD.start();
            //  tweenE.start();
            //  tweenF.start();
            //  tweenG.start();
            //  tweenH.start();
             //rb middle
            //  game.physics.arcade.enable([qb, wr1, wr2, te1, te2, rb1, ct, rg, rt, lg, lt]);
             console.log('wr1 ===', wr1);
             function rbChoice(){

                     var y =  Math.floor((Math.random() * 3) + 1);
                     console.log("rb choice  === ", rushingYards);
                     console.log('rb1= ',rb1);
                    switch (y){

                        case 1:
                        rushingYards = (rushingYards * 5);
                        rushingYards = rushingYards + football.x;
                         var tweenB1 = game.add.tween(rb1).to({


                           x: + rushingYards

                         });

                         console.log('rushing yards =====', rushingYards);
                         console.log(rb1);
                          tweenB1.start();
                          tweenB1.onComplete.add(function newlocation(newBallSpot){

                            newBallSpotx = rb1.x;
                            // newBallSpoty = rb1.y
                            return newBallSpotx
                          });

                          if(football.x || rb1.x > 720){

                            homeTD();
                          }

                          setTimeout(switchStateToHuddle,3000);

                          console.log("statement 1");




                        break;

                        case 2:
                        rushingYards = (rushingYards * 5);
                        rushingYards = rushingYards + football.x;
                        var tweenB2 = game.add.tween(rb1).to({
                          x: + rushingYards


                        });

                        console.log('rushing yards =====', rushingYards);
                        tweenB2.start();
                        tweenB2.onComplete.add(function newlocation(newBallSpot){
                          console.log(y);
                          newBallSpotx = rb1.x;
                          // newBallSpoty = rb1.y
                          return newBallSpotx
                        });
                        if(football.x || rb1.x > 720){

                          homeTD();
                        }

                        setTimeout(switchStateToHuddle,3000);

                        console.log("statement 2");
                        break;

                        case 3:
                        rushingYards = (rushingYards * 5);
                        rushingYards = rushingYards + football.x;

                        var tweenB3 = game.add.tween(rb1).to({
                          x: + rushingYards


                        });
                        console.log('rushing yards =====', rushingYards);
                        tweenB3.start();
                        tweenB3.onComplete.add(function newlocation(newBallSpot){
                          console.log(y);
                          newBallSpotx = rb1.x;
                          // newBallSpoty = rb1.y
                          return newBallSpotx
                        });

                        if(football.x || rb1.x > 720){

                          homeTD();
                        }

                        setTimeout(switchStateToHuddle,3000);

                        break;

                      }


                   }
                  //  runYardsGenerator();
                  //  game.physics.arcade.enable([qb, wr1, wr2, te1, te2, rb1, ct, rg, rt, lg, lt]);

}

function runPlayLeft (){

          playCount = +playCount;
          playCount += 1;


          runningPlaysDownChecker();

          console.log("playcount = ", playCount);

          if(playCount == 1){

            var ct = game.add.sprite(220, 220, 'ct');
            ct.scale.setTo(0.03);

          } else{

            var ct = game.add.sprite(newBallSpotx, 220, 'ct');
            ct.scale.setTo(0.03);
          }


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


      var WR1x = ct.x - 20;
      var WR1y = ct.y - 150;
      var wr1 = this.game.add.sprite(WR1x, WR1y, 'wr1');
      wr1.scale.setTo(0.02);
      var spriteTextWR1 = game.add.text(WR1x, WR1y, 'WR1', {
          font: '9px Press Start 2P'
      });


      var WR2x = ct.x;
      var WR2y = ct.y +140;
      var wr2 = this.game.add.sprite(WR2x, WR2y, 'wr2');
      wr2.scale.setTo(0.02);
      var spriteTextWR2 = game.add.text(WR2x, WR2y, 'WR2', {
          font: '9px Press Start 2P'
      });

      var TE1x = ct.x;
      var TE1y = ct.y - 62;
      var te1 = this.game.add.sprite(TE1x, TE1y, 'te1');
      te1.scale.setTo(0.02);
      var spriteTextTE1 = game.add.text(TE1x, TE1y, 'TE1', {
          font: '9px Press Start 2P'
      });

      var TE2x = ct.x - 20;
      var TE2y = ct.y - 75;
      var te2 = this.game.add.sprite(TE2x, TE2y, 'te2');
      te2.scale.setTo(0.02);
      var spriteTextTE2 = game.add.text(TE2x, TE2y, 'TE2', {
          font: '9px Press Start 2P'
      });
   //Run left

       var football = this.game.add.sprite(ct.x, ct.y, 'football');
             football.scale.setTo(0.08);


       var tweenA = game.add.tween(qb).to({
           x: '-80'
       }, 700);

       var tweenB = game.add.tween(rb1).to({
           x: '+50',
           y: '-20'
       }, 700);

       var tweenC = game.add.tween(wr1).to({
          x: '+60'
       }, 700);

       var tweenD = game.add.tween(wr2).to({
          x: '+60'
       }, 700);

       var tweenE = game.add.tween(lt).to({
          x: '+`10'
       }, 700);

       var tweenF = game.add.tween(lg).to({
          x: '+10'
       }, 700);

       var tweenG = game.add.tween(rg).to({
         x: '+10'
       }, 700);

       var tweenH = game.add.tween(lt).to({
         x: '+10'
       }, 700);

       tweenA.start();
       tweenB.start();
       tweenC.start();
       tweenD.start();
       tweenE.start();
       tweenF.start();
       tweenG.start();
       tweenH.start();

       rbChoice2();

       game.physics.arcade.enable([qb, wr1, wr2, te1, te2, rb1, ct, rg, rt, lg, lt]);
      //  console.log(ct);
   function rbChoice2(){
     //run left



          // rushingScripts();
           var y =   Math.floor((Math.random() * 3) + 1);
           console.log(y);
           console.log('rb1= ',rb1);
          switch (y){

          case 1:

          rushingYards = (rushingYards * 5);
          rushingYards = rushingYards + football.x;
              console.log("rushing yards  ======= ", rushingYards);

              var tweenB4 = game.add.tween(rb1).to({
                x: + rushingYards,
                y: '-30'

              }, 700);


              tweenB4.start();
              tweenB4.onComplete.add(function newlocation(newBallSpot){
                console.log(y);
                newBallSpotx = rb1.x;
                // newBallSpoty = rb1.y


              console.log("statement 1");

              if(football.x || rb1.x > 720){

                homeTD();
              }
              setTimeout(switchStateToHuddle,2000);

              return newBallSpotx

            });


          break;



          case 2:

          rushingYards = (rushingYards * 5);
          rushingYards = rushingYards + football.x;
          console.log("rushing yards  ======= ", rushingYards);

          var tweenB5 = game.add.tween(rb1).to({
            x: + rushingYards,
            y: '-50'

          }, 700);

          tweenB5.start();
          tweenB5.onComplete.add(function newlocation(newBallSpot){
            console.log(y);
            newBallSpotx = rb1.x;
            // newBallSpoty = rb1.y

            if(football.x || rb1.x > 720){

              homeTD();
            }

            setTimeout(switchStateToHuddle,2000);

            return newBallSpotx


        });



          console.log("statement 2");
          break;




          case 3:

          rushingYards = (rushingYards * 5);
          rushingYards = rushingYards + football.x;
          console.log("rushing yards  ======= ", rushingYards);

          var tweenB6 = game.add.tween(rb1).to({
            x:+ rushingYards,
            y: '-70'

          }, 700);


          tweenB6.start()
          // tweenB6.onComplete.add(tweenB7.start());
          tweenB6.onComplete.add(function newlocation(newBallSpot){
            console.log(y);
            newBallSpotx = rb1.x;
            // newBallSpoty = rb1.y

            if(football.x || rb1.x > 720){

              homeTD();
            }

              setTimeout(switchStateToHuddle,3000);
            return newBallSpotx

        });




          console.log("statement 3");
          break;


   }
}

}

function runPlayRight(){

            playCount = +playCount;
            playCount += 1;
            runningPlaysDownChecker();
            console.log("rushing yards =  ", rushingYards);

            var x5  = rushingYards * 5.2;

            console.log('coordinates ===== ', x5);
            console.log("playcount = ", playCount);

            if(playCount == 1){

              var ct = game.add.sprite(220, 220, 'ct');
              ct.scale.setTo(0.03);

            } else{

              var ct = game.add.sprite(newBallSpotx, 220, 'ct');
              ct.scale.setTo(0.03);
            }


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


          var WR1x = ct.x - 20;
          var WR1y = ct.y - 150;
          var wr1 = this.game.add.sprite(WR1x, WR1y, 'wr1');
          wr1.scale.setTo(0.02);
          var spriteTextWR1 = game.add.text(WR1x, WR1y, 'WR1', {
            font: '9px Press Start 2P'
          });


          var WR2x = ct.x;
          var WR2y = ct.y +140;
          var wr2 = this.game.add.sprite(WR2x, WR2y, 'wr2');
          wr2.scale.setTo(0.02);
          var spriteTextWR2 = game.add.text(WR2x, WR2y, 'WR2', {
            font: '9px Press Start 2P'
          });

          var TE1x = ct.x ;
          var TE1y = ct.y + 60;
          var te1 = this.game.add.sprite(TE1x, TE1y, 'te1');
          te1.scale.setTo(0.02);
          var spriteTextTE1 = game.add.text(TE1x, TE1y, 'TE1', {
            font: '9px Press Start 2P'
          });

          var TE2x = ct.x - 20;
          var TE2y = ct.y + 75;
          var te2 = this.game.add.sprite(TE2x, TE2y, 'te2');
          te2.scale.setTo(0.02);
          var spriteTextTE2 = game.add.text(TE2x, TE2y, 'TE2', {
            font: '9px Press Start 2P'
          });

          // Base43Defense(runPlayLeft, ct);
          //Run left

          var tweenA = game.add.tween(qb).to({
          x: '-80'
          }, 700);

          var tweenB = game.add.tween(rb1).to({
          x: '+40',
          y: '+50'
          }, 700);

          var tweenC = game.add.tween(wr1).to({
          x: '+60'
          }, 700);

          var tweenD = game.add.tween(wr2).to({
          x: '+60'
          }, 700);

          var tweenE = game.add.tween(lt).to({
          x: '+`10'
          }, 700);

          var tweenF = game.add.tween(lg).to({
          x: '+10'
          }, 700);

          var tweenG = game.add.tween(rg).to({
          x: '+10'
          }, 700);

          var tweenH = game.add.tween(lt).to({
          x: '+10'
        }, 700);

        var football = this.game.add.sprite(ct.x, ct.y, 'football');
              football.scale.setTo(0.08);

          tweenA.start();
          tweenB.start();
          tweenB.onComplete.add(function newlocation (playCount){

        rbChoice3();
        //  newBallSpotx = rb1.x;
        //  newBallSpoty = rb1.y;



          // return newBallSpotx, newBallSpoty, playCount;
          });

          tweenC.start();
          tweenD.start();
          tweenE.start();
          tweenF.start();
          tweenG.start();
          tweenH.start();


          game.physics.arcade.enable([qb, wr1, wr2, te1, te2, rb1, ct, rg, rt, lg, lt]);
          // setTimeout(switchStateToHuddle,3000);
          // Base43Defense(runPlayLeft, ct.x);

          function rbChoice3(){
            //run right
                  // rushingScript();
                  var y =   Math.floor((Math.random() * 3) + 1);
                  console.log(y);
                  console.log('rb1= ',rb1);

                 switch (y){

                 case 1:
                 rushingYards = (rushingYards * 5);
                 rushingYards = rushingYards + football.x;

                 var tweenB7 = game.add.tween(rb1).to({
                   x:  +  rushingYards

                 }, 700);


                 tweenB7.start();
                 tweenB7.onComplete.add(function newlocation(newBallSpot){
                   console.log(y);
                   newBallSpotx = rb1.x;
                   // newBallSpoty = rb1.y

                   if(football.x || rb1.x > 720){

                     homeTD();
                   }

                   setTimeout(switchStateToHuddle,3000);

                   return newBallSpotx


                 console.log("statement 1");
               });

                 break;



                 case 2:
                 rushingYards = (rushingYards * 5);
                 rushingYards = rushingYards + football.x;

                 var tweenB8 = game.add.tween(rb1).to({
                   x: + rushingYards,
                   y: '+20'

                 }, 700);

                 tweenB8.start();
                 tweenB8.onComplete.add(function newlocation(newBallSpot){
                   console.log(y);
                   newBallSpotx = rb1.x;
                   // newBallSpoty = rb1.y

                   if(football.x || rb1.x > 720){

                     homeTD();
                   }

                   setTimeout(switchStateToHuddle,3000);

                   return newBallSpotx


               });



                 console.log("statement 2");
                 break;




                 case 3:
                 rushingYards = (rushingYards * 5);
                 rushingYards = rushingYards + football.x;

                 var tweenB9 = game.add.tween(rb1).to({
                   x: + rushingYards,
                   y: '+40'

                 }, 700);


                 tweenB9.start()
                 // tweenB6.onComplete.add(tweenB7.start());
                 tweenB9.onComplete.add(function newlocation(newBallSpot){
                   console.log(y);
                   newBallSpotx = rb1.x;

                   if(football.x || rb1.x > 720){

                     homeTD();
                   }
                   // newBallSpoty = rb1.y\
                   setTimeout(switchStateToHuddle,3000);

                   return newBallSpotx

               });



                 console.log("statement 3");
                 break;


          }
  }
}
