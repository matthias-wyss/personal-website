/*****************************************************************************************************************************************/
/*                                                   CLIC SOURIS DES TOUCHES BLANCHES                                                    */
/*****************************************************************************************************************************************/


window.addEventListener('load',  () => { /* observe si tous les fichiers sont chargés */
  const sounds = document.querySelectorAll(".sound"); /* constante qui renvoie la liste de tous les éléments du fichier html ayant pour class "sound" */
  const pads = document.querySelectorAll(".pads div"); /* constante qui renvoie la liste de tous les éléments du fichier html ayant pour class toutes les class appartenant à la class "pads" */

  pads.forEach((pad, index) => { /* pour chaque touche blanche de la liste */
    pad.addEventListener("click", function() { /* observe si une touche blanche est cliquée et l'enregistre dans une fonction */
      console.log(sounds[index]); /* affiche le son joué dans la console dans F12 */
      sounds[index].currentTime = 0; /* commencer le son au début */
      sounds[index].play(); /* joue le son de la liste en fonction de l'élément de la liste cliqué */

    });
  });
});


/*****************************************************************************************************************************************/
/*                                                   CLIC SOURIS DES TOUCHES NOIRES                                                      */
/*****************************************************************************************************************************************/


window.addEventListener('load',  () => { /* observe si tous les fichiers sont chargés */
  const soundsn = document.querySelectorAll(".soundn"); /* constante qui renvoie la liste de tous les éléments du fichier html ayant pour class "soundn" */
  const padsn = document.querySelectorAll(".padsn div"); /* constante qui renvoie la liste de tous les éléments du fichier html ayant pour class toutes les class appartenant à la class "padsn" */

  padsn.forEach((padn, index) => { /* pour chaque touche noire de la liste */
    padn.addEventListener("click", function() { /* observe si une touche noire est cliquée et l'enregistre dans une fonction */
      console.log(soundsn[index]); /* affiche le son joué dans la console dans F12 */
      soundsn[index].currentTime = 0; /* commence le son au début */
      soundsn[index].play(); /* joue le son de la liste en fonction de l'élément de la liste cliqué */

    });
  });
});


/*****************************************************************************************************************************************/
/*                                              APPUIE DES TOUCHES CLAVIER                                                               */
/*****************************************************************************************************************************************/


document.addEventListener("keydown", function(event) { /* observe si une touche du clavier est appuyée et l'enregistre dans la fonction event */
  console.log(event.which); /* affiche la touche du clavier appuyée dans la console dans F12 */
  if(event.keyCode == 65){ /* correspond à la touche "a" sur le clavier français */
    var son1 = new Audio ('son/do1.mp3'); /* la variable son1 prend la valeur du son do1 */
    son1.currentTime = 0; /* commencer le son au début */
    son1.play(); /* jouer le son */
  }

  if(event.keyCode == 50){ /* correspond à la touche "é" sur le clavier français */
    var son1 = new Audio ('son/doD1.mp3'); /* la variable son1 prend la valeur du son do#1 */
    son1.currentTime = 0; /* commencer le son au début */
    son1.play(); /* jouer le son */
  }

  if(event.keyCode == 90){ /* correspond à la touche "z" sur le clavier français */
    var son1 = new Audio ('son/re1.mp3'); /* la variable son1 prend la valeur du son ré1 */
    son1.currentTime = 0; /* commencer le son au début */
    son1.play(); /* jouer le son */
  }

  if(event.keyCode == 51){ /* correspond à la touche " sur le clavier français */
    var son1 = new Audio ('son/reD1.mp3'); /* la variable son1 prend la valeur du son ré#1 */
    son1.currentTime = 0; /* commencer le son au début */
    son1.play(); /* jouer le son */
  }

  if(event.keyCode == 69){ /* correspond à la touche "e" sur le clavier français */
    var son1 = new Audio ('son/mi1.mp3'); /* la variable son1 prend la valeur du son mi1 */
    son1.currentTime = 0;
    son1.play(); /* jouer le son */
  }

  if(event.keyCode == 82){ /* correspond à la touche "r" sur le clavier français */
    var son1 = new Audio ('son/fa1.mp3'); /* la variable son1 prend la valeur du son fa1 */
    son1.currentTime = 0; /* commencer le son au début */
    son1.play(); /* jouer le son */
  }

  if(event.keyCode == 53){ /* correspond à la touche "(" sur le clavier français */
    var son1 = new Audio ('son/faD1.mp3'); /* la variable son1 prend la valeur du son fa#1 */
    son1.currentTime = 0; /* commencer le son au début */
    son1.play(); /* jouer le son */
  }

  if(event.keyCode == 84){ /* correspond à la touche "t" sur le clavier français */
    var son1 = new Audio ('son/sol1.mp3'); /* la variable son1 prend la valeur du son sol1 */
    son1.currentTime = 0; /* commencer le son au début */
    son1.play(); /* jouer le son */
  }

  if(event.keyCode == 54){ /* correspond à la touche "-" sur le clavier français */
    var son1 = new Audio ('son/solD1.mp3'); /* la variable son1 prend la valeur du son sol#1 */
    son1.currentTime = 0; /* commencer le son au début */
    son1.play(); /* jouer le son */
  }

  if(event.keyCode == 89){ /* correspond à la touche "y" sur le clavier français */
    var son1 = new Audio ('son/la1.mp3'); /* la variable son1 prend la valeur du son la1 */
    son1.currentTime = 0; /* commencer le son au début */
    son1.play(); /* jouer le son */
  }

  if(event.keyCode == 55){ /* correspond à la touche "è" sur le clavier français */
    var son1 = new Audio ('son/laD1.mp3'); /* la variable son1 prend la valeur du son la#1 */
    son1.currentTime = 0; /* commencer le son au début */
    son1.play(); /* jouer le son */
  }

  if(event.keyCode == 85){ /* correspond à la touche "u" sur le clavier français */
    var son1 = new Audio ('son/si1.mp3'); /* la variable son1 prend la valeur du son si1 */
    son1.currentTime = 0; /* commencer le son au début */
    son1.play(); /* jouer le son */
  }

  if(event.keyCode == 73){ /* correspond à la touche "i" sur le clavier français */
    var son1 = new Audio ('son/do2.mp3'); /* la variable son1 prend la valeur du son do2 */
    son1.currentTime = 0; /* commencer le son au début */
    son1.play(); /* jouer le son */ 
  }

  if(event.keyCode == 226){ /* correspond à la touche "<" sur le clavier français */
    var son1 = new Audio ('son/do2.mp3'); /* la variable son1 prend la valeur du son do2 */
    son1.currentTime = 0; /* commencer le son au début */
    son1.play(); /* jouer le son */
  }

  if(event.keyCode == 81){ /* correspond à la touche "q" sur le clavier français */
    var son1 = new Audio ('son/doD2.mp3'); /* la variable son1 prend la valeur du son do#2 */
    son1.currentTime = 0; /* commencer le son au début */
    son1.play(); /* jouer le son */
  }

  if(event.keyCode == 87){ /* correspond à la touche "w" sur le clavier français */
    var son1 = new Audio ('son/re2.mp3'); /* la variable son1 prend la valeur du son ré2 */
    son1.currentTime = 0; /* commencer le son au début */
    son1.play(); /* jouer le son */
  }

  if(event.keyCode == 83){ /* correspond à la touche "s" sur le clavier français */
    var son1 = new Audio ('son/reD2.mp3'); /* la variable son1 prend la valeur du son ré#2 */
    son1.currentTime = 0; /* commencer le son au début */
    son1.play(); /* jouer le son */
  }

  if(event.keyCode == 88){ /* correspond à la touche "x" sur le clavier français */
    var son1 = new Audio ('son/mi2.mp3'); /* la variable son1 prend la valeur du son mi2 */
    son1.currentTime = 0; /* commencer le son au début */
    son1.play(); /* jouer le son */
  }

  if(event.keyCode == 67){ /* correspond à la touche "c" sur le clavier français */
    var son1 = new Audio ('son/fa2.mp3'); /* la variable son1 prend la valeur du son fa2 */
    son1.currentTime = 0; /* commencer le son au début */
    son1.play(); /* jouer le son */
  }

  if(event.keyCode == 70){ /* correspond à la touche "f" sur le clavier français */
    var son1 = new Audio ('son/faD2.mp3'); /* la variable son1 prend la valeur du son fa#2 */
    son1.currentTime = 0; /* commencer le son au début */
    son1.play(); /* jouer le son */
  }

  if(event.keyCode == 86){ /* correspond à la touche "v" sur le clavier français */
    var son1 = new Audio ('son/sol2.mp3'); /* la variable son1 prend la valeur du son sol2 */
    son1.currentTime = 0; /* commencer le son au début */
    son1.play(); /* jouer le son */
  }

  if(event.keyCode == 71){ /* correspond à la touche "g" sur le clavier français */
    var son1 = new Audio ('son/solD2.mp3'); /* la variable son1 prend la valeur du son sol#2 */
    son1.currentTime = 0; /* commencer le son au début */
    son1.play(); /* jouer le son */
  }

  if(event.keyCode == 66){ /* correspond à la touche "b" sur le clavier français */
    var son1 = new Audio ('son/la2.mp3'); /* la variable son1 prend la valeur du son la2 */
    son1.currentTime = 0; /* commencer le son au début */
    son1.play(); /* jouer le son */
  }

  if(event.keyCode == 72){ /* correspond à la touche "h" sur le clavier français */
    var son1 = new Audio ('son/laD2.mp3'); /* la variable son1 prend la valeur du son la#2 */
    son1.currentTime = 0; /* commencer le son au début */
    son1.play(); /* jouer le son */
  }

  if(event.keyCode == 78){ /* correspond à la touche "n" sur le clavier français */
    var son1 = new Audio ('son/si2.mp3'); /* la variable son1 prend la valeur du son si2 */
    son1.currentTime = 0; /* commencer le son au début */
    son1.play(); /* jouer le son */
  }

  if(event.keyCode == 188){ /* correspond à la touche "," sur le clavier français */
    var son1 = new Audio ('son/do3.mp3'); /* la variable son1 prend la valeur du son do3 */
    son1.currentTime = 0; /* commencer le son au début */
    son1.play(); /* jouer le son */
  }
});