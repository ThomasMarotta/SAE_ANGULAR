import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JoueurService {


  constructor(private http: HttpClient) { }

  getJoueurs(): Observable<any[]> {
    return this.http.get<any[]>(`/api/joueurs/listeJoueurs`);
  }

  getJoueurUnique(pseudo: string | undefined): Observable<any> {
    return this.http.get<any>(`/api/joueur/details&Pseudo=${pseudo}`);
  }

  ajouterJoueur(pseudo: string, nom: string, prenom: string, dateDeNaissance: string, sexe: string) {
    const joueurData = {"pseudo" : pseudo, "nom" : nom, "prenom" : prenom, "dateDeNaissance" : dateDeNaissance , "sexe" : sexe}
    console.log(joueurData)
    this.http.post<any>('/api/joueurs/ajouterJoueur', joueurData);
  }
}

