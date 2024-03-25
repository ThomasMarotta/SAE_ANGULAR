import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JoueurService } from '../joueur.service';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-joueur-detail',
  templateUrl: './detail-joueur.component.html',
  standalone: true,
  imports: [
    NgIf
  ]
})
export class DetailJoueurComponent implements OnInit {
  joueur: any;
  pseudo: string = 'Loganette';

  constructor(private route: ActivatedRoute, private joueurService: JoueurService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.pseudo = params['pseudo'];
      this.getJoueur();
    });
  }

  getJoueur(): void {
    this.joueurService.getJoueurUnique(this.pseudo).subscribe(joueur => {
      console.log(joueur);
      this.joueur = JSON.parse(joueur);
    });
  }
}
