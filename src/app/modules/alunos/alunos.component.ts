import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../model/aluno.model';
import { ApiService } from '../../service/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.scss'
})

export class AlunosComponent implements OnInit {
  alunos: Aluno[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
      this.carregarAlunos();
  }

  carregarAlunos() {
    this.apiService.getAlunos().subscribe(data => this.alunos = data);
  }
}
