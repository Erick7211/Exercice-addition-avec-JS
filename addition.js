function somme(){
    var valeur1, valeur2, resultat;
    valeur1 = Number(document.getElementById("valeur1").value);
    valeur2 = Number(document.getElementById("valeur2").value);
    resultat = valeur1 + valeur2;
    document.getElementById("resultat").value = resultat;
}