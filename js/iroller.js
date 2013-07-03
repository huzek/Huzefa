// Copyright (c) 2012-2013 Daniele Veneroni. Released under MIT License
"use strict";

// ON LOAD
window.addEventListener("load", function() {
     init();
}, 0);

// FUNZIONE INIT
function init() {
    localStorage.clear();
    localStorage.logger = "";

    var addToHomeConfig = {
        animationIn: 'drop',
        animationOut: 'fade',
        startDelay: 1000,
        lifespan: 5000,
        expire: 2,
        touchIcon:true,
    };

    document.getElementById("d4").onclick = function() { d(4); };
    document.getElementById("d6").onclick = function() { d(6); };
    document.getElementById("d8").onclick = function() { d(8); };
    document.getElementById("d10").onclick = function() { d(10); };
    document.getElementById("d12").onclick = function() { d(12); };
    document.getElementById("d20").onclick = function() { d(20); };
    document.getElementById("d100").onclick = function() { d(100); };
    document.getElementById("coin").onclick = function() { coin(); };

    document.getElementById("custombutton").onclick = function() { custom(); };

    document.getElementById("marcia1").onclick = function() { marcia(1); };
    document.getElementById("marcia2").onclick = function() { marcia(2); };
    document.getElementById("marcia3").onclick = function() { marcia(3); };
    document.getElementById("marcia4").onclick = function() { marcia(4); };
    document.getElementById("marcia5").onclick = function() { marcia(5); };
    document.getElementById("marcia6").onclick = function() { marcia(6); };

    document.getElementById("catan1").onclick = function() { catan(1); };
    document.getElementById("catan2").onclick = function() { catan(2); };
    document.getElementById("catan3").onclick = function() { catan(3); };
    document.getElementById("catan4").onclick = function() { catan(4); };
    document.getElementById("catan5").onclick = function() { catan(5); };
    document.getElementById("catan6").onclick = function() { catan(6); };

    document.getElementById("memoir44-1").onclick = function() { memoir44(1); };
    document.getElementById("memoir44-2").onclick = function() { memoir44(2); };
    document.getElementById("memoir44-3").onclick = function() { memoir44(3); };
    document.getElementById("memoir44-4").onclick = function() { memoir44(4); };
    document.getElementById("memoir44-5").onclick = function() { memoir44(5); };
    document.getElementById("memoir44-6").onclick = function() { memoir44(6); };

    document.getElementById("battlelore1").onclick = function() { battlelore(1); };
    document.getElementById("battlelore2").onclick = function() { battlelore(2); };
    document.getElementById("battlelore3").onclick = function() { battlelore(3); };
    document.getElementById("battlelore4").onclick = function() { battlelore(4); };
    document.getElementById("battlelore5").onclick = function() { battlelore(5); };
    document.getElementById("battlelore6").onclick = function() { battlelore(6); };

    document.getElementById("ancients1").onclick = function() { ancients(1); };
    document.getElementById("ancients2").onclick = function() { ancients(2); };
    document.getElementById("ancients3").onclick = function() { ancients(3); };
    document.getElementById("ancients4").onclick = function() { ancients(4); };
    document.getElementById("ancients5").onclick = function() { ancients(5); };
    document.getElementById("ancients6").onclick = function() { ancients(6); };

    document.getElementById("westeros1").onclick = function() { westeros(1); };
    document.getElementById("westeros2").onclick = function() { westeros(2); };
    document.getElementById("westeros3").onclick = function() { westeros(3); };
    document.getElementById("westeros4").onclick = function() { westeros(4); };
    document.getElementById("westeros5").onclick = function() { westeros(5); };
    document.getElementById("westeros6").onclick = function() { westeros(6); };

    document.getElementById("tickettoridetrain1").onclick = function() { tickettoridetrain(1); };
    document.getElementById("tickettoridetrain2").onclick = function() { tickettoridetrain(2); };
    document.getElementById("tickettoridetrain3").onclick = function() { tickettoridetrain(3); };
    document.getElementById("tickettoridetrain4").onclick = function() { tickettoridetrain(4); };
    document.getElementById("tickettoridetrain5").onclick = function() { tickettoridetrain(5); };

    document.getElementById("tickettoridetunnel").onclick = function() { tickettoridetunnel(3); };

    document.getElementById("refreshlog").onclick = function() { document.getElementById("history").value = localStorage.logger; };
    document.getElementById("clearlog").onclick = function() { localStorage.clear(); localStorage.logger = ""; document.getElementById("history").value = ''; };
    
}

// FUNZIONE D (D20 SYSTEM)
function d(n) {
    var oggi = new Date();
    var log = "[" + oggi.toLocaleDateString() + " " + oggi.toLocaleTimeString() + "]   ";
    var ris = "1d" + n + ":   ";
    ris += Math.floor(Math.random() * n) + 1;
    log += ris;
    localStorage.logger = log + "\n" + localStorage.logger;
    ris = "[" + oggi.toLocaleDateString() + " " + oggi.toLocaleTimeString() + "]<br /><b><h1>" + ris + "</h1></b>";
    $("#risdiventi").html(ris).effect("bounce", 500);
}

// FUNZIONE COIN (D20 SYSTEM)
function coin() {
    var oggi = new Date();
    var log = "[" + oggi.toLocaleDateString() + " " + oggi.toLocaleTimeString() + "]   ";
    var ris = "Coin: ";
    var n = Math.floor(Math.random() * 2);
    if (n === 0) { ris += "Tail"; }
    else { ris += "Head"; }
    log += ris;
    localStorage.logger = log + "\n" + localStorage.logger;
    ris = "[" + oggi.toLocaleDateString() + " " + oggi.toLocaleTimeString() + "]<br /><b><h1>" + ris + "</h1></b>";
    $("#risdiventi").html(ris).effect("bounce", 500);
}

// FUNZIONE CUSTOM (CUSTOM DICE)
function custom() {
    var num = document.getElementById("num").value;
    var facce = document.getElementById("facce").value;
    if (num < 1 || num > 100) {
        alert("Number of dice not valid. Min: 1, Max: 100");
        return;
    }
    if (facce < 2 || facce > 100) {
        alert("Number of faces not valid. Min: 2, Max: 100");
        return;
    }
    var oggi = new Date();
    var log = "[" + oggi.toLocaleDateString() + " " + oggi.toLocaleTimeString() + "]   " + num + "d" + facce + ":   ";
    var ris = "[" + oggi.toLocaleDateString() + "&nbsp;" + oggi.toLocaleTimeString() + "]<br /><b><h1>" + num + "d" + facce + "<br /><br />";
    var somma = 0;
    for (var i = 0; i < num; i++) {
        var tiro = Math.floor(Math.random() * facce) + 1;
        somma += tiro;
        ris += "&nbsp;" + tiro + "&nbsp;";
        log += " " + tiro + " ";
    }
    log += "= " + somma;
    localStorage.logger = log + "\n" + localStorage.logger;
    ris += "=&nbsp;" + somma + "</h1></b>";
    $("#risultatocustom").html(ris).effect("bounce", 500);
}

// FUNZIONE MARCIA (FORMULA DE')
function marcia(num) {
    var ris = "",  d, oggi = new Date();
    var log = "[" + oggi.toLocaleDateString() + " " + oggi.toLocaleTimeString() + "]<br />";
    switch (num) {
        case 1:
            d = (Math.floor(Math.random() * 2) + 1);
            ris = log + "<b>1st Gear<br /><h1>" + d + "</h1></b>";
            break;
        case 2:
            d = (Math.floor(Math.random() * 3) + 2);
            ris = log + "<b>2nd Gear<br /><h1>" + d + "</h1></b>";
            break;
        case 3:
            d = (Math.floor(Math.random() * 5) + 4);
            ris = log + "<b>3rd Gear<br /><h1>" + d + "</h1></b>";
            break;
        case 4:
            d = (Math.floor(Math.random() * 6) + 7);
            ris = log + "<b>4th Gear<br /><h1>" + d + "</h1></b>";
            break;
        case 5:
            d = (Math.floor(Math.random() * 10) + 11);
            ris = log + "<b>5th Gear<br /><h1>" + d + "</h1></b>";
            break;
        case 6:
            d = (Math.floor(Math.random() * 10) + 21);
            ris = log + "<b>6th Gear<br /><h1>" + d + "</h1></b>";
            break;
        default:
            alert("Errore nella determinazione della marcia");
    }
    $("#risultatofd").html(ris).effect("bounce", 500);
    localStorage.logger = "[" + oggi.toLocaleDateString() + " " + oggi.toLocaleTimeString() + "]     " + num + " Gear:     " + d + "\n" + localStorage.logger;
}

// FUNZIONE CATAN (CATAN DICE GAME)
function catan(num) {
    var d, oggi = new Date();
    var ris = "[" + oggi.toLocaleDateString() + " " + oggi.toLocaleTimeString() + "]<br /><br />";
    var i = 0;
    while (i < num) {
        d = (Math.floor(Math.random() * 6) + 1);
        ris += "<img src=\"img/dice/catan/" + d + ".png\">&nbsp;";
        i++;
    }
    $("#risultatocatan").html(ris).effect("bounce", 500);
}

// FUNZIONE MEMOIR44 (MEMOIR '44)
function memoir44(num) {
    var d, oggi = new Date();
    var ris = "[" + oggi.toLocaleDateString() + " " + oggi.toLocaleTimeString() + "]<br /><br />";
    var i = 0;
    while (i < num) {
        d = (Math.floor(Math.random() * 6) + 1);
        ris += "<img src=\"img/dice/memoir44/" + d + ".png\">&nbsp;";
        i++;
    }
    $("#risultatomemoir44").html(ris).effect("bounce", 500);
}

// FUNZIONE BATTLELORE (BATTLELORE)
function battlelore(num) {
    var d, oggi = new Date();
    var ris = "[" + oggi.toLocaleDateString() + " " + oggi.toLocaleTimeString() + "]<br /><br />";
    var i = 0;
    while (i < num) {
        d = (Math.floor(Math.random() * 6) + 1);
        ris += "<img src=\"img/dice/battlelore/" + d + ".png\">&nbsp;";
        i++;
    }
    $("#risultatobattlelore").html(ris).effect("bounce", 500);
}

// FUNZIONE ANCIENTS (C&C: ANCIENTS)
function ancients(num) {
    var d, oggi = new Date();
    var ris = "[" + oggi.toLocaleDateString() + " " + oggi.toLocaleTimeString() + "]<br /><br />";
    var i = 0;
    while (i < num) {
        d = (Math.floor(Math.random() * 6) + 1);
        ris += "<img src=\"img/dice/ancients/" + d + ".png\">&nbsp;";
        i++;
    }
    $("#risultatoancients").html(ris).effect("bounce", 500);
}

// FUNZIONE WESTEROS (BATTLES FO WESTEROS)
function westeros(num) {
    var d, oggi = new Date();
    var ris = "[" + oggi.toLocaleDateString() + " " + oggi.toLocaleTimeString() + "]<br /><br />";
    var i = 0;
    while (i < num) {
        d = (Math.floor(Math.random() * 8) + 1);
        ris += "<img src=\"img/dice/westeros/" + d + ".png\">&nbsp;";
        i++;
    }
    $("#risultatowesteros").html(ris).effect("bounce", 500);
}

// FUNZIONE TICKETTORIDETRAIN (TICKET TO RIDE DICE GAME)
function tickettoridetrain(num) {
    var d, oggi = new Date();
    var ris = "[" + oggi.toLocaleDateString() + " " + oggi.toLocaleTimeString() + "]<br /><br />";
    var i = 0;
    while (i < num) {
        d = (Math.floor(Math.random() * 6) + 1);
        ris += "<img src=\"img/dice/tickettoride/train" + d + ".png\">&nbsp;";
        i++;
    }
    $("#risultatotickettoridetrain").html(ris).effect("bounce", 500);
}

// FUNZIONE TICKETTORIDETUNNEL (TICKET TO RIDE DICE GAME)
function tickettoridetunnel(num) {
    var d, oggi = new Date();
    var ris = "[" + oggi.toLocaleDateString() + " " + oggi.toLocaleTimeString() + "]<br /><br />";
    var i = 0;
    while (i < num) {
        d = (Math.floor(Math.random() * 6) + 1);
        ris += "<img src=\"img/dice/tickettoride/tunnel" + d + ".png\">&nbsp;";
        i++;
    }
    $("#risultatotickettoridetunnel").html(ris).effect("bounce", 500);
}
