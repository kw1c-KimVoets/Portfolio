/*
Auteur:         Kim Voets
Aanmaakdatum:   

opdracht 
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////                                            Elde college tabel
///////////////////////////////////////////////////////////////////////////////////////////////////////
//var met inhoud array
var thema=["Naam", "Adres", "Plaats", "telefoonnummer", "website"];
var info=["Elde College","Putsteeg 4", "5481 XT Schijndel","073 820 0400","<a href='https://www.eldecollege.nl/' target='_blank'>https://www.eldecollege.nl/</a>"];

var i = 0
//while loop
while(i <= thema.length - 1)
{
    document.getElementById("list").innerHTML =
    document.getElementById("list").innerHTML + "<tr><th>" + thema[i] + "</th> <td>" + info [i] + " </td></tr>";
    i++;   
}
///////////////////////////////////////////////////////////////////////////////////////////////////////                                     Koning Willem I college tabel
///////////////////////////////////////////////////////////////////////////////////////////////////////
var thema2=["Naam", "Adres", "Plaats", "telefoonnummer", "website"];
var info2=["Koning Willem 1 College","Onderwijsboulevard 3","5223 DE 's-Hertogenbosch","073 624 9 444","<a href='https://www.kw1c.nl/' target='_blank'>https://www.kw1c.nl/</a>"];

var i = 0
//while loop
while(i <= thema2.length - 1)
{
    document.getElementById("list2").innerHTML =
    document.getElementById("list2").innerHTML + "<tr><th>" + thema2[i] + "</th> <td>" + info2[i] + " </td></tr>";
    i++;   
}
