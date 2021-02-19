"use strict";
//8 verschiedene Farben
var cardDeckcolor = [
    { color: "rot" },
    { color: "rot" },
    { color: "blau" },
    { color: "blau" },
    { color: "gelb" },
    { color: "gelb" },
    { color: "grün" },
    { color: "grün" },
    { color: "lila" },
    { color: "lila" },
    { color: "schwarz" },
    { color: "schwarz" },
    { color: "pink" },
    { color: "pink" },
    { color: "türkis" },
    { color: "türkis" }
];
//4 verschiedene Piktogramme
var cardDeckpikto = [
    { pikto: "1" },
    { pikto: "1" },
    { pikto: "2" },
    { pikto: "2" },
    { pikto: "3" },
    { pikto: "3" },
    { pikto: "4" },
    { pikto: "4" }
];
//8 Sätze
var cardDecksatz = [
    { satz: "Hallo" },
    { satz: "Hi" },
    { satz: "blau" },
    { satz: "blau" },
    { satz: "gelb" },
    { satz: "gelb" },
    { satz: "grün" },
    { satz: "grün" },
    { satz: "Hallo" },
    { satz: "Hi" },
    { satz: "blau" },
    { satz: "blau" },
    { satz: "gelb" },
    { satz: "gelb" },
    { satz: "grün" },
    { satz: "grün" }
];
//Arrays für das im Spiel verwendete Deck
var deck = [];
var memoryValues = [];
var memoryTiles = [];
var tilesFlipped = 0;
var punkte = 0;
var played = false;
//prompt zum Wählen der Schwierigkeit
var dificulty = prompt("Bitte wähle einen Schwieigkeitsgrad (leicht, mittel oder schwer)");
//bei Schwierigkeitsgrad leicht 8 Karten (4 Paare) mit Farbe oder Piktogramm erstellen und in Deck array schieben
//bei Schwierigkeitsgrad mittel 16 Karten (8 Paare) mit Farbe, Piktogram oder Satz erstellen und in Deck array schieben
//bei Schwierigkeitsgrad schwer 32 Karten (16 Paare) mit Farbe oder Satz erstellen und in Deck array schieben
//Array mischen
//Karten darstellen
//click event auf Karten, "aufdecken"
//Werte der aufgedeckten Karten vergleichen
//gleiche Karten, Karten werden entfernt, Spieler bekommt Punkt
//Prüfen auf übrige Karten, wenn ja Spieler kann wieder Karten auswählen, wenn nein, spieler hat gewonnen
checkend1();
function checkend1() {
    if (deck.length == 0) {
        alert("Du hast gewonnen, Refreshe die Seite und spiele erneut um dem Computer eine weitere Niederlage zu bescheren!");
    }
}
//ungleiche Karten, werden verdeckt, Computer ist an der Reihe
//Computer erstellt 2 random nummern, deckt diese Karten auf
//Werte der aufgedeckten Karten werden verglichen
//gleiche karten, werden entfernt, Computer bekommt Punkt
//Prüfen auf übrige Karten, wenn ja Computer ist nochmal dran, wenn nein Computer hat gewonnen
checkend2();
function checkend2() {
    if (deck.length == 0) {
        alert("Der Computer hat gewonnen. Refreshe die Seite, um zu gewinnen!");
    }
}
//ungleiche Karten, werden verdeckt, Spieler kann Karten wählen
//# sourceMappingURL=memory.js.map