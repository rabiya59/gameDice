"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dee_1 = require("./dee");
const gobelet_1 = require("./gobelet");
const joueur_1 = require("./joueur");
const partie_1 = require("./partie");
const lanceDee = new dee_1.DEE();
//lanceDee.lancer()
//console.log(lanceDee.get_value());
const gobelet = new gobelet_1.Gobelet(2);
gobelet.lancer();
gobelet.getValeur();
//gobelet.lancer()
//gobelet.getValeur()
//console.log(gobelet);
//console.log(gobelet.lancer());
let joueur1 = new joueur_1.Joueur('rabiya');
let joueur2 = new joueur_1.Joueur('Toto');
let tabjoueur = [joueur1, joueur2];
joueur1.jouerGobelet(gobelet);
joueur1.afficheScore();
joueur2.jouerGobelet(gobelet);
joueur2.afficheScore;
const partie = new partie_1.Partie(2, 2);
partie.initialiser(tabjoueur);
