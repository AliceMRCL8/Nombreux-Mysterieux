import { Component, EventEmitter, Output, } from '@angular/core';

@Component({
  selector: 'app-nu',
  templateUrl: './nu.component.html',
  styleUrls: ['./nu.component.css']
})
export class NUComponent {
  //variable valeur utilisateur
  nuValeur!: number;
  //output et fonction sendnuvaleur() pour l'envoyer a son parent
  @Output() nuValueEmitter = new EventEmitter<number>();
  nuValeurEmitter: any;

  sendNuValeur(){
    this.nuValeurEmitter.emit(this.nuValeur);
  }

}
