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
    return this.http.get<any>(`/api/joueurs/details&Pseudo=${pseudo}`);
  }
  ajouterJoueur(pseudo: string, nom: string, prenom: string, dateDeNaissance: string, sexe: string): Observable<any> {
    const joueurData = { pseudo, nom, prenom, dateDeNaissance, sexe };
    console.log(joueurData)
    return this.http.post<JSON>(`/api/joueurs/ajouterJoueur`, joueurData);
  }
}

