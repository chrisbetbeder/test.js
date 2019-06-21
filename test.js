class Tasse {
    constructor(name) {
        this.name = name;
        this.quantite = 0;
        this.sucre = 0;
        this.vide = false;
    }

    remplir(litre) {
        this.quantite += litre;
        console.log(this.quantite);

    }
}

var x = new Tasse("toto");

console.log(x.name);
x.remplir(10);


class chat { //Création d'une entité
    constructor(name) { //Méthode pour créer un objet
        this.name = name //contenu de l'objet
        this.yeux = 0;
        this.oreilles = 0;
        this.pattes = 0;
        this.couleur = " ";
        this.x = 0;
        this.y = 0;
    }
    presentation() { //methode qui contient les differentes variables
        return this.name + " " + this.yeux + " " + this.oreilles + " " + this.pattes + " " + this.couleur;
    }
    bouger(combien) { //methode pour déplacer mon objet Chat
        x += combien;
        y += combien;
    }
}
var c = new chat("pepere"); //attribution des données correspondantes à l'objet
var a = 2;
var T = "noir";
c.pattes = a;
c.yeux = a;
c.oreilles = a;
c.couleur = T;


console.log(c.presentation()); //appelle les attributions => c à la methode => presentation