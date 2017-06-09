
var home = 0;
var homeScore = 0;
var away = 0;
var awayScore = 0;
var td = 6;
var fg = 3;
var down = 1;
var yardsToGo = 10;
var currentDown = 0;
var remaining = 6;
var rushYardsGained = 0;
var rushingYards;


function homeTD (){
    homeScore = homeScore + td;
    home = homeScore;

    console.log('homescore ', home);
    document.getElementById("home").innerHTML = home;


}
function homeFG (){
    homeScore = homeScore + fg;
    home = homeScore;

    console.log('homescore ', home);
    document.getElementById("home").innerHTML = home;

}


function awayTD(){

    awayScore = awayScore + td;
    away= awayScore;

    document.getElementById("away").innerHTML = away;

    console.log('away score ', awayScore);

}

function awayFG(){
    awayScore = awayScore + fg;
    away = awayScore;

    document.getElementById("away").innerHTML = away;


}

function runningPlaysDownChecker (){


  currentDown = currentDown + 1;
  console.log("current down is ", currentDown);

  rushingYards = Math.floor((Math.random() * 10) + 1);
  console.log("rushing yards ==== ", rushingYards);
  yardsToGo = yardsToGo - rushingYards;
  console.log('yardsToGo ===', yardsToGo);
  document.getElementById("currentDownDisplay").innerHTML = currentDown;
  document.getElementById("yardsRemaining").innerHTML = yardsToGo;

  rushingScript(rushingYards);



  if (currentDown == 4){
    console.log("its 4th down!!!");
    down = 1;

  } else if (yardsToGo < 0){

      currentDown = 1;
      yardsToGo = 10;
      console.log("move the chains");
      document.getElementById("yardsRemaining").innerHTML = yardsToGo;
      document.getElementById("currentDownDisplay").innerHTML = currentDown;


  }
}


function passingPlaysDownChecker(){



    currentDown = currentDown + 1;
    console.log("current down is ", currentDown);


    document.getElementById("currentDownDisplay").innerHTML = currentDown;
    // document.getElementById("yardsRemaining").innerHTML = yardsToGo;




    if (currentDown === 4){
      console.log("its 4th down!!!");
      currentDown = 0;

    }
    //  else if (yardsToGo < 0){
    //
    //     currentDown = 1;
    //     // yardsToGo = 10;
    //     console.log("move the chains");
    //     // document.getElementById("yardsRemaining").innerHTML = yardsToGo;
    //     document.getElementById("currentDownDisplay").innerHTML = currentDown;
    //
    //
    // }


}
