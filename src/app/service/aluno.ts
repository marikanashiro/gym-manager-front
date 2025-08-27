import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private apiUrl = 'http://localhost:8080/api/alunos';

  constructor(private http: HttpClient) { }

  getAlunos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
