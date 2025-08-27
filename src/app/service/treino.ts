import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreinoService {
  private apiUrl = 'http://localhost:8080/api/treinos'

  constructor(private http: HttpClient) { }

  getTreinos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
