//Déclaration des variables globales

var mot = 0;
var t1 = 0;
var t2 = 0;
var nbtent = 0;
var temps = 0;
var tab2 = [];
var mot_a_Trouver = [];
var tentatives = 6;

function Joueur() {
  this.nom = "";
  this.score = 10000;
  this.temps = 10000;
}

var datas = [];
for (var i = 0; i < 10; i++) {
  datas[i] = new Joueur();
}
function init(){
  Meilleurs();
}
window.onload = init;


var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "-"];

//Création du clavier

for (var l = 0; l < 27; l++) {
  var btn = document.createElement("BUTTON");
  btn.setAttribute("id", alphabet[l]);
  btn.innerHTML = (alphabet[l]);
  document.getElementById("lettres").appendChild(btn);
  btn.setAttribute("onClick", "verifie(" + l + " )");
}

var essai = $("<p></p>");
essai.text(tentatives + " tentatives restantes");
essai.attr("id", "tenta");
$("div[id='jeu']").append(essai);

var motCache = $('<p>').text("Trouvez le mot caché");
motCache.attr("id", "devine");
$(categorie).append(motCache);

//Création des catégories de mots

function Animaux() {
  motCache.text("Trouvez l'animal caché");
  mot_a_Trouver = ["LOUP", "MOUTON", "GIRAFE", "ZEBRE", "ORNITHORYNQUE"];
  jeu();
}

function Pays() {
  mot_a_Trouver = ["ALGERIE", "FRANCE", "MALI", "ALLEMAGNE", "OUZBEKISTAN"];
  motCache.text("Trouvez le pays caché");
  jeu();
}

function Sports() {
  mot_a_Trouver = ["TENNIS", "FOOTBALL", "PING-PONG", "VOLLEY", "RUGBY"];
  motCache.text("Trouvez le sport caché");
  jeu();
}

//Déroulement du jeu

function jeu() {
  //Meilleurs();
  ($("p[id='tenta']")).text(tentatives + " tentatives restantes");
  tab2 = new Array;
  //Tirage aléatoire d'un mot et masquage

  mot = Math.floor(Math.random() * (mot_a_Trouver.length));
  for (var l = 0; l < mot_a_Trouver[mot].length; l++) {
    var p1 = document.getElementById("para");
    var divjeu = document.getElementById("jeu");
    tab2[l] = "_";
  }
  p1.innerHTML = tab2.join(' ');
  var bouton = document.getElementById(alphabet[l]);
  bouton.setAttribute("onClick", "verifie(" + l + " )");
  t1 = new Date();
}

//Vérification de la lettre cliquée

function verifie(l) {
  var p = document.getElementById("para");
  if (mot_a_Trouver[mot].includes(alphabet[l])) {
    //Bonne réponse, dévoilement de la lettre trouvée

    for (var i = 0; i < mot_a_Trouver[mot].length; i++) {
      var lettre = mot_a_Trouver[mot].indexOf(alphabet[l], i);
      tab2[lettre] = alphabet[l];
    }
    p.innerHTML = tab2.join(' ');
  }
  else {
    //Mauvaise réponse, traçage du pendu pour chaque erreur
    nbtent++;
    tentatives--;
    if (tentatives == 5) {
      essai.text(tentatives + " tentatives restantes");
      var ctxsocle = document.getElementsByTagName('canvas')[0].getContext('2d');
      ctxsocle.strokeStyle = "black";
      ctxsocle.beginPath();
      ctxsocle.moveTo(50, 30);
      ctxsocle.lineTo(150, 30);
      ctxsocle.lineTo(150, 300);
      ctxsocle.moveTo(50, 300);
      ctxsocle.lineTo(200, 300);
      ctxsocle.stroke()
    }

    else if (tentatives == 4) {
      essai.text(tentatives + " tentatives restantes");
      var ctxbuste = document.getElementsByTagName('canvas')[0].getContext('2d');
      ctxbuste.beginPath();
      ctxbuste.moveTo(100, 120);
      ctxbuste.lineTo(100, 190);
      ctxbuste.closePath();
      ctxbuste.stroke();
    }

    else if (tentatives == 3) {
      essai.text(tentatives + " tentatives restantes");
      var ctxbras = document.getElementsByTagName('canvas')[0].getContext('2d');
      ctxbras.beginPath();
      ctxbras.moveTo(100, 130);
      ctxbras.lineTo(110, 163);
      ctxbras.moveTo(100, 130);
      ctxbras.lineTo(90, 160);
      ctxbras.closePath();
      ctxbras.stroke();
    }

    else if (tentatives == 2) {
      essai.text(tentatives + " tentatives restantes");
      var ctxjambe = document.getElementsByTagName('canvas')[0].getContext('2d');
      ctxjambe.beginPath();
      ctxjambe.moveTo(100, 190);
      ctxjambe.lineTo(110, 223);
      ctxjambe.moveTo(100, 190);
      ctxjambe.lineTo(90, 220);
      ctxjambe.closePath();
      ctxjambe.stroke();
    }

    else if (tentatives == 1) {
      essai.text("Plus qu'une chance!");
      var ctxtete = document.getElementsByTagName('canvas')[0].getContext("2d");
      ctxtete.scale(0.88, 0.7);
      ctxtete.beginPath();
      ctxtete.arc(98, 158, 20, 0, 2 * Math.PI);
      ctxtete.stroke();
      var ctx = document.getElementsByTagName('canvas')[0].getContext('2d');
      ctx.beginPath();
      ctx.arc(102, 166, 5, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(88, 166, 5, 0, 2 * Math.PI);
      ctx.stroke();
    }

    else if (tentatives == 0) {
      essai.text("C'est fini. Dommage!");
      var ctxcorde = document.getElementsByTagName('canvas')[0].getContext('2d');
      ctxcorde.beginPath();
      ctxcorde.arc(103, 153, 20, 0, 1.5 * Math.PI / 5);
      ctxcorde.stroke();
      var ctxcorde2 = document.getElementsByTagName('canvas')[0].getContext('2d');
      ctxcorde2.beginPath();
      ctxcorde2.moveTo(123, 153);
      ctxcorde2.lineTo(123, 42);
      ctxcorde2.stroke();

      var ctxyeux = document.getElementById("canvas").getContext("2d");
      ctxyeux.strokeStyle = "red";

      ctxyeux.beginPath();
      ctxyeux.moveTo(85, 160);
      ctxyeux.lineTo(90, 170);
      ctxyeux.moveTo(90, 160);
      ctxyeux.lineTo(85, 170);

      ctxyeux.moveTo(100, 162);
      ctxyeux.lineTo(105, 172);
      ctxyeux.moveTo(105, 162);
      ctxyeux.lineTo(100, 172);
      ctxyeux.stroke();
    }
  }
  var bouton = document.getElementById(alphabet[l]);
  bouton.setAttribute("disabled", true);
  if (nbtent == 6) {
    var p = document.getElementById("para");
    p.innerHTML = ("vous avez perdu! Le mot caché était " + mot_a_Trouver[mot]);
    for (var l = 0; l < 27; l++) {
      var bouton = document.getElementById(alphabet[l]);
      bouton.setAttribute("disabled", true);
    }
  }

  // Mot trouvé!
  if (tab2.join('') === mot_a_Trouver[mot]) {
    for (var l = 0; l < 27; l++) {
      var bouton = document.getElementById(alphabet[l]);
      bouton.setAttribute("disabled", true);
    }
    t2 = new Date();
    temps = Math.floor((t2.getTime() - t1.getTime()) / 1000);

    console.log("nbtent= " + nbtent + ",temps= " + temps);

    if ((nbtent < datas[9].score) || (nbtent == datas[9].score && temps < datas[9].temps)) {
      p.innerHTML = "Bravo! Vous avez trouvé le mot " + mot_a_Trouver[mot];

      var divNom = document.createElement("DIV");
      divNom.setAttribute("id", "divNom");
      document.body.appendChild(divNom);
      var p3 = document.createElement("P");
      p3.setAttribute("id", "p3");
      p3.innerHTML = "Félicitation! Vous faites parti des 10 meilleurs. Entrez votre nom";
      divNom.appendChild(p3);

      var input = document.createElement("INPUT");
      input.setAttribute("id", "intext2");
      divNom.appendChild(input);

      var bouton2 = document.createElement("BUTTON");
      bouton2.setAttribute("id", "bouton2");
      bouton2.innerHTML = " Ajouter";
      divNom.appendChild(bouton2);
      bouton2.addEventListener("click", addData, false);
    }
    else {
      p.innerHTML = "Bravo! Vous avez trouvé le mot " + mot_a_Trouver[mot] + ", mais vous ne faites pas partie des 10 meilleurs joueurs";
    }
    if (nbtent == datas[9].score && temps == datas[9].temps) {
      p.innerHTML = "Bravo! Vous avez trouvé le mot " + mot_a_Trouver[mot] + ". Vous êtes 10eme ex aequo";
    }
  }
}

function rejouer() {
  for (var l = 0; l < 27; l++) {
    var btn = document.getElementById(alphabet[l]);
    btn.removeAttribute("disabled");
  }
  var context = document.getElementsByTagName('canvas')[0].getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  nbtent = 0;
  tentatives = 6;
  jeu();
}

function addData() {
  temps = Math.floor((t2.getTime() - t1.getTime()) / 1000);
  var intext2 = document.getElementById("intext2");
  getData();
  datas.push({ nom: intext2.value, score: nbtent, temps: temps });
  localStorage.setItem("localData", JSON.stringify(datas));
  showData();
  document.body.removeChild(divNom);
  datas.sort(function (a, b) { return a.score - b.score });
  Meilleurs();
 // table();
}

function getData() {
  var str = localStorage.getItem("localData");
  if (str != null) {
    datas = JSON.parse(str);
  }
}

function showData() {
  var intext2 = document.getElementById("intext2");
  getData();
  datas.sort(function (a, b) {
    if (a.score != b.score)
      return a.score - b.score
    else {
      return a.temps - b.temps
    }
  });
}

function deleteData() {
  localStorage.clear();
  location.reload();
}

function Meilleurs() {
  if (!localStorage.getItem('localData')) {
    document.getElementById("tenta").innerHTML = ("Il n'y a pas encore de joueur");
    
  }
  else {
    showData();
    localStorage.getItem('localData');
    var l1c1 = document.getElementById("11");
    var l1c2 = document.getElementById("12");
    var l1c3 = document.getElementById("13");
    l1c1.innerHTML = datas[0].nom;
    l1c2.innerHTML = datas[0].score;
    l1c3.innerHTML = datas[0].temps;

    //rang 2
    var l2c1 = document.getElementById("21");
    var l2c2 = document.getElementById("22");
    var l2c3 = document.getElementById("23");
    l2c1.innerHTML = datas[1].nom;
    l2c2.innerHTML = datas[1].score;
    l2c3.innerHTML = datas[1].temps;

    //rang 3
    var l3c1 = document.getElementById("31");
    var l3c2 = document.getElementById("32");
    var l3c3 = document.getElementById("33");
    l3c1.innerHTML = datas[2].nom;
    l3c2.innerHTML = datas[2].score;
    l3c3.innerHTML = datas[2].temps;

    //rang 4
    var l4c1 = document.getElementById("41");
    var l4c2 = document.getElementById("42");
    var l4c3 = document.getElementById("43");
    l4c1.innerHTML = datas[3].nom;
    l4c2.innerHTML = datas[3].score;
    l4c3.innerHTML = datas[3].temps;

    //rang 5
    var l5c1 = document.getElementById("51");
    var l5c2 = document.getElementById("52");
    var l5c3 = document.getElementById("53");
    l5c1.innerHTML = datas[4].nom;
    l5c2.innerHTML = datas[4].score;
    l5c3.innerHTML = datas[4].temps;

    //rang 6
    var l6c1 = document.getElementById("61");
    var l6c2 = document.getElementById("62");
    var l6c3 = document.getElementById("63");
    l6c1.innerHTML = datas[5].nom;
    l6c2.innerHTML = datas[5].score;
    l6c3.innerHTML = datas[5].temps;

    //rang 7
    var l7c1 = document.getElementById("71");
    var l7c2 = document.getElementById("72");
    var l7c3 = document.getElementById("73");
    l7c1.innerHTML = datas[6].nom;
    l7c2.innerHTML = datas[6].score;
    l7c3.innerHTML = datas[6].temps;

    //rang 8
    var l8c1 = document.getElementById("81");
    var l8c2 = document.getElementById("82");
    var l8c3 = document.getElementById("83");
    l8c1.innerHTML = datas[7].nom;
    l8c2.innerHTML = datas[7].score;
    l8c3.innerHTML = datas[7].temps;

    //rang 9
    var l9c1 = document.getElementById("91");
    var l9c2 = document.getElementById("92");
    var l9c3 = document.getElementById("93");
    l9c1.innerHTML = datas[8].nom;
    l9c2.innerHTML = datas[8].score;
    l9c3.innerHTML = datas[8].temps;

    //rang 10
    var l10c1 = document.getElementById("101");
    var l10c2 = document.getElementById("102");
    var l10c3 = document.getElementById("103");
    l10c1.innerHTML = datas[9].nom;
    l10c2.innerHTML = datas[9].score;
    l10c3.innerHTML = datas[9].temps;
  }
}