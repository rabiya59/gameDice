import { DEE} from "./dee";
import { Gobelet } from "./gobelet";
import { Joueur } from "./joueur";
import { Partie } from "./partie";

const lanceDee = new DEE ()

//lanceDee.lancer()
//console.log(lanceDee.get_value());


const gobelet = new Gobelet(2)
gobelet.lancer()
gobelet.getValeur()
//gobelet.lancer()
//gobelet.getValeur()
//console.log(gobelet);

//console.log(gobelet.lancer());

let joueur1= new Joueur('rabiya');
let joueur2= new Joueur('Toto')
let tabjoueur = [joueur1,joueur2]

joueur1.jouerGobelet(gobelet)
joueur1.afficheScore()
joueur2.jouerGobelet(gobelet)
joueur2.afficheScore


const partie = new Partie(2,2)
partie.initialiser(tabjoueur)
partie.lancer(2)
partie.afficherGagnant()





