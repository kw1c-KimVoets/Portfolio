/*
Auteur:         Kim Voets
Aanmaakdatum:   

opdracht 
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////                                     Jumbo tabel
///////////////////////////////////////////////////////////////////////////////////////////////////////
var thema2=["Naam", "Adres", "Plaats", "telefoonnummer", "website"];
var info2=["Jumbo","Rooiseheide 5","5481 SG Schijndel","073 549 6676","<a href='https://www.jumbo.com/' target='_blank'>https://www.jumbo.com/</a>"];

var i = 0
//while loop
while(i <= thema2.length - 1)
{
    document.getElementById("list2").innerHTML =
    document.getElementById("list2").innerHTML + "<tr><th>" + thema2[i] + "</th> <td>" + info2[i] + " </td></tr>";
    i++;   
}