import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NombreuxMysterieux';

  naValeur: number;
  nuValeur!: number;
  result!: string;

  constructor() {
    // Génère un nombre aléatoire entre 0 et 1000
    this.naValeur = Math.floor(Math.random() * 1001);
  }

  checkNumber() {
    //compare le nombre de l'utilisateur nuvaleur au nombre aléatoire na pour choisir le bon resultat a afficher
    if (this.nuValeur > this.naValeur) {
      this.result = "C'est moins !";
    } else if (this.nuValeur < this.naValeur) {
      this.result = "C'est plus !";
    } else {
      this.result = "C'est gagné !";
    }
  }

}
