import { Component, OnInit } from '@angular/core';
import { JoueurService } from '../joueur.service';
import {NgForOf} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-liste-joueur',
  standalone: true,
  templateUrl: './liste-joueur.component.html',
  imports: [
    NgForOf,
    RouterOutlet,
    RouterLink
  ],
})
export class ListeJoueursComponent implements OnInit {
  joueurs: any[] | undefined;

  constructor(private joueurService: JoueurService) {
  }

  ngOnInit(): void {
    this.getJoueurs();
  }

  getJoueurs(): void {
    this.joueurService.getJoueurs().subscribe(data => {
      this.joueurs = data.map(joueur => JSON.parse(joueur));
    });
  }
}
