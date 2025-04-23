/*****************************************************************************************************************************************/
/*                                                        DÉCIMAL                                                                        */
/*****************************************************************************************************************************************/


function xdecimal() /* fonction exécutée lorsque l'on clique sur le 1er bouton */
{
    decimal = document.getElementById("decimal"); /* la variable decimal prend la valeur de la case decimal */
    hexadecimal = document.getElementById("hexadecimal"); /* la variable hexadecimal prend la valeur de la case hexadecimal */
    binaire = document.getElementById("binaire"); /* la variable binaire prend la valeur de la case binaire */
 
    hexadecimal.value = (decimal.value-0).toString(16); /* la valeur de la case hexadecimal prend la valeur de la case decimal et est converti en base 16 */
    binaire.value = (decimal.value-0).toString(2); /* la valeur de la case binaire prend la valeur de la case decimal et est converti en base 2 */
}


/*****************************************************************************************************************************************/
/*                                                        HEXADÉCIMAL                                                                    */
/*****************************************************************************************************************************************/


function xhexadecimal() /* fonction exécutée lorsque l'on clique sur le 2ème bouton */
{
    decimal = document.getElementById("decimal"); /* la variable decimal prend la valeur de la case decimal */
    hexadecimal = document.getElementById("hexadecimal"); /* la variable hexadecimal prend la valeur de la case hexadecimal */
    binaire = document.getElementById("binaire"); /* la variable binaire prend la valeur de la case binaire */
 
    decimal.value = parseInt(hexadecimal.value,16);  /* la valeur de la case decimal prend la valeur de la case hexadecimal et est converti en nombre entier puis en base 16 */
    binaire.value = (parseInt(hexadecimal.value,16)).toString(2); /* la valeur de la case binaire prend la valeur de la case hexadecimal et est converti en nombre entier puis en base 2 */
}


/*****************************************************************************************************************************************/
/*                                                        BINARE                                                                         */
/*****************************************************************************************************************************************/


function xbinaire() /* fonction exécutée lorsque l'on clique sur le 3ème bouton */
{
    decimal = document.getElementById("decimal"); /* la variable decimal prend la valeur de la case decimal */
    hexadecimal = document.getElementById("hexadecimal"); /* la variable hexadecimal prend la valeur de la case hexadecimal */
    binaire = document.getElementById("binaire"); /* la variable binaire prend la valeur de la case binaire */
 
    decimal.value = parseInt(binaire.value,2); /* la valeur de la case decimal prend la valeur de la case binaire et est converti en nombre entier puis en base 16 */
    hexadecimal.value = (parseInt(binaire.value,2)).toString(16); /* la valeur de la case hexadecimal prend la valeur de la case binaire et est converti en nombre entier en base 16 */
}