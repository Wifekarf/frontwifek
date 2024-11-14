// chambre.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chambre } from '../model/chambre.model/chambre.model.module';


@Injectable({
  providedIn: 'root',
})
export class ChambreService {
  private apiUrl = 'http://192.168.50.4:8089/tpfoyer/chambre';

  constructor(private http: HttpClient) {}

  getChambres(): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(`${this.apiUrl}/retrieve-all-chambres`);
  }

  getChambreById(chambreId: number): Observable<Chambre> {
    return this.http.get<Chambre>(`${this.apiUrl}/retrieve-chambre/${chambreId}`);
  }

  addChambre(chambre: Chambre): Observable<Chambre> {
    return this.http.post<Chambre>(`${this.apiUrl}/add-chambre`, chambre);
  }

  updateChambre(chambre: Chambre): Observable<Chambre> {
    return this.http.put<Chambre>(`${this.apiUrl}/modify-chambre`, chambre);
  }

  deleteChambre(chambreId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/remove-chambre/${chambreId}`);
  }

  getChambresByType(typeC: string): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(`${this.apiUrl}/trouver-chambres-selon-typ/${typeC}`);
  }

  getChambreByStudentCin(cin: number): Observable<Chambre> {
    return this.http.get<Chambre>(`${this.apiUrl}/trouver-chambre-selon-etudiant/${cin}`);
  }
}
