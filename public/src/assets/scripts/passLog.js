function passingScripts(){
    var i = 2;

    // Math.floor((Math.random() * 3));
    var rushingScript = new Array();
          rushingScript[0] = "WR 1 catches pass left side for 5 yards";
          rushingScript[1] = "WR1 yard recption down the middle " + rushingYards + " yards";
          rushingScript[2] = "WR1 circus catch down the right side for 5 yards";
          rushingScript[2] = "WR1 reception  " + rushingYards + " yards";

          document.getElementById('gameLog').innerHTML += rushingScript[i];
          document.getElementById('gameLog').innerHTML += '<br/>';

    }
