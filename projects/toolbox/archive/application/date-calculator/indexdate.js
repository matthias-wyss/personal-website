function calculer() /* fonction exécutée lorsque l'on clique sur le bouton */
{
  const date1 = document.getElementById("date1"); /* la constante date1 prend la valeur de la case date1 */
  const date2 = document.getElementById("date2"); /* la constante date1 prend la valeur de la case date2 */
  const diff = document.getElementById("nbjours"); /* la constante diff prend la valeur de la case nbjours */

  
  const realDate1 = dateParser(date1.value) /* on envoie la valeur de date1 pour récupérer la valeur de getTime */
  const realDate2 = dateParser(date2.value) /* on envoie la valeur de date2 pour récupérer la valeur de getTime */

  const msDifference = realDate2 - realDate1; /* la constante msdifference prend la valeur de la différence entre les deux dates en milliseconde */
  const jours = msDifference / (1000 * 3600 * 24); /* la constante jours prend la valeur de la constante msDifference en convertissant les millisecondes en jours */
  diff.value = (Math.round(jours)) /* permet d'arrondir à l'entier le plus proche pour corriger un bug dû aux années bissextiles */
}

/* Les valeurs sont reçu sous forme "aaaa-mm-jj" donc il faut séparer, pour cela => la fonction */

function dateParser (date) {    
  
  const year = date.substring(0, 4) /* on sépare l'année */
  const month = date.substring(5 , 7) /*on sépare le mois */
  const day = date.substring(8, 10) /* on sépare le jour */


  const realDate = new Date(year , month-1, day);  /* on créé un nouvel objet Date pour pouvoir utiliser la fonction getTime() dessus */
  const time = realDate.getTime() /* on récupère la date */
  return time /* on retourne la date parser pour pouvoir effectuer des calculs */
}