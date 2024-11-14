// chambre.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chambre } from '../model/chambre.model/chambre.model.module';


@Injectable({
  providedIn: 'root',
})
export class ChambreService {
  private apiUrl = 'http://192.168.73.167:8088/tpfoyer17/api/chambres';

  constructor(private http: HttpClient) {}

  getChambres(): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(`${this.apiUrl}/retrieveAllChambres`);
  }

  getChambreById(chambreId: number): Observable<Chambre> {
    return this.http.get<Chambre>(`${this.apiUrl}/retrieveChambre/${chambreId}`);
  }

  addChambre(chambre: Chambre): Observable<Chambre> {
    return this.http.post<Chambre>(`${this.apiUrl}/addChambre`, chambre);
  }

  updateChambre(chambre: Chambre): Observable<Chambre> {
    return this.http.put<Chambre>(`${this.apiUrl}/updateChambre`, chambre);
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
