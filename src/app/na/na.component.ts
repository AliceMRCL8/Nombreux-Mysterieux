import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-na',
  templateUrl: './na.component.html',
  styleUrls: ['./na.component.css']
})
export class NAComponent {
  //variable pour valeur aléatoire
  @Input() naValeur: number | null = null;
}
