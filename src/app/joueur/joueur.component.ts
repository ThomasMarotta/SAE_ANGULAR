import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-joueur',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './joueur.component.html',
  styleUrl: '../app.component.css'
})
export class JoueurComponent {

}
