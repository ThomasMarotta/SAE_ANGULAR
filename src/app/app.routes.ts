import { Routes } from '@angular/router';
import { JoueurComponent } from "./joueur/joueur.component";
import { TournoiComponent } from "./tournoi/tournoi.component";
import { ListeJoueursComponent } from "./liste-joueur/liste-joueur.component"
import { AjoutJoueurComponent } from "./ajout-joueur/ajout-joueur.component";
import { DetailJoueurComponent } from "./detail-joueur/detail-joueur.component";

export const routes: Routes = [
  { path:'joueur', component: JoueurComponent,
  children: [
    { path: '', redirectTo: 'liste', pathMatch: 'full' },
    { path: 'liste', component: ListeJoueursComponent },
    { path: 'detail/:pseudo', component: DetailJoueurComponent },
    { path: 'ajout', component: AjoutJoueurComponent }
  ]},
  { path:'tournoi', component: TournoiComponent },];
