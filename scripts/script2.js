/*
Auteur:         Kim Voets
Aanmaakdatum:   

opdracht 
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////                                     Resultaten tabel
///////////////////////////////////////////////////////////////////////////////////////////////////////
var vakken= ["Plannen en ontwerpen", "Realiseren", "Testen en verbeteren", "Computervaardigheden","Beroepshouding","Burgerschap","Nederlands","Engels","Rekenen"];

var eindCijfer=[6.9, 7.8, 7.9, 8.9,"V",8.0,9.3,9.5,6.6];
    
var oefeningen=[6.7,7.9,8.0,9.4,"V",8.0,9.0,10.0,"nvt"];

var toets=[6.7,5.8,"nvt",8.7,"V","nvt",9.5,9.0,6.6];

var project=[7.0,8.8,7.8,8.8,"V","nvt","nvt","nvt","nvt"];

var OofV=["voldoende","voldoende","voldoende","voldoende","voldoende","voldoende","voldoende","voldoende","voldoende"]

var i = 0

//while loop
while(i <= vakken.length - 1)
{
    document.getElementById("resultaat").innerHTML =
    document.getElementById("resultaat").innerHTML + "<tr><th>" + vakken[i] + "</td><td>" + oefeningen[i] + "</td><td>" + toets[i] + "</td><td>" + project[i] + "</td><td>" + eindCijfer[i] + "</td><td>" + OofV[i] + "</td></tr>";
    i++;   
}

//Schrijf een funtie die het gemiddelde cijfer ophaald van alle modules samen
function average(gemiddelde)
{
    var totGemiddeld= Math.round((eindCijfer[0] + eindCijfer [1] + eindCijfer [2] + eindCijfer [3] + eindCijfer [5] + eindCijfer [6] + eindCijfer [7] + eindCijfer[8]) / 8 * 10)/10;
    document.getElementById("totaal").innerHTML = "<strong>Mijn totaal gemiddelde van periode 1 is een " + totGemiddeld + "</strong>"
}