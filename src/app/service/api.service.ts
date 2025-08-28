import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Treino } from '../model/treino.model';
import { Aluno } from '../model/aluno.model';
import { TipoTreino } from '../model/tipoTreino.model';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {  }

  getAlunos(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(`${this.baseUrl}/alunos`);
  }

  getAluno(alunoId: number): Observable<Aluno> {
    return this.http.get<Aluno>(`${this.baseUrl}/alunos/${alunoId}`)
  }

  getTreinos(): Observable<Treino[]> {
    return this.http.get<Treino[]>(`${this.baseUrl}/treinos`);
  }

  getTipoTreinos(): Observable<TipoTreino[]> {
    return this.http.get<TipoTreino[]>(`${this.baseUrl}/tipoTreinos`);
  }

  createAluno(aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(`${this.baseUrl}/alunos`, aluno);
  }

  createTreino(treino: Treino): Observable<Treino> {
    return this.http.post<Treino>(`${this.baseUrl}/treinos`, treino);
  }

  createTipoTreino(tipoTreino: TipoTreino): Observable<TipoTreino> {
    return this.http.post<TipoTreino>(`${this.baseUrl}/tipoTreinos`, tipoTreino);
  }

  updateAluno(alunoId: number, aluno: Aluno): Observable<Aluno> {
    return this.http.put<Aluno>(`${this.baseUrl}/alunos/${alunoId}`, aluno);
  }
}
