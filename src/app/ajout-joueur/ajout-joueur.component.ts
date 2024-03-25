import { Component } from '@angular/core';
import { JoueurService } from '../joueur.service'; // Correct path to joueur service
import { FormsModule } from '@angular/forms'; // Import FormsModule directly, not inside @Component
import { NgIf } from '@angular/common'; // Import NgIf directly, not inside @Component

@Component({
  selector: 'app-ajout-joueur',
  templateUrl: './ajout-joueur.component.html',
  styleUrls: ['./ajout-joueur.component.css'],
  standalone: true,
  providers: [JoueurService] // Add JoueurService to providers
})
export class AjoutJoueurComponent {
  nouveauJoueur = {
    pseudo: '',
    nom: '',
    prenom: '',
    dateDeNaissance: '',
    sexe: ''
  };

  constructor(private joueurService: JoueurService) {}

  ajouterJoueur() {
    console.log('Nouveau joueur ajouté:', this.nouveauJoueur);
    this.nouveauJoueur = {
      pseudo: '',
      nom: '',
      prenom: '',
      dateDeNaissance: '',
      sexe: ''
    };
  }
}
