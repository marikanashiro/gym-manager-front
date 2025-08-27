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
  alunosFiltrados: Aluno[] = [];
  filtro: string = '';
  filtroEstimulo: string = '';
  filtroDataExpiracao: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
      this.carregarAlunos();
  }

  carregarAlunos() {
    this.apiService.getAlunos().subscribe(alunos => {
      this.alunos = alunos;
      this.filtrarAlunos();
    });
  }

  filtrarAlunos() {
    // começa com a lista completa
    this.alunosFiltrados = [...this.alunos];

    //aplica filtros apenas se houver valores
    if (this.filtro) {
      this.alunosFiltrados = this.alunosFiltrados.filter(aluno => 
        aluno.nome.toLowerCase().includes(this.filtro.toLowerCase())
      );
    }
    if (this.filtroEstimulo && this.filtroEstimulo.trim() !== '') {
      this.alunosFiltrados = this.alunosFiltrados.filter(aluno =>
        aluno.treinos?.some(t => t.tipoEstimulo.toLowerCase() === this.filtroEstimulo.toLowerCase())
      );
    }
    if (this.filtroDataExpiracao) {
      this.alunosFiltrados = this.alunosFiltrados.filter(aluno =>
        aluno.treinos?.some(t => t.dataExpiracao === this.filtroDataExpiracao)
      );
    }
  }

  limparFiltros() {
    this.filtro = '';
    this.filtroEstimulo = '';
    this.filtroDataExpiracao = '';
    this.filtrarAlunos();
  }

  onFiltroEstimuloChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.filtroEstimulo = target.value;
    this.filtrarAlunos();
  }

  onFiltroChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.filtro = target.value;
    this.filtrarAlunos();
  }

  onFiltroDataExpiracaoChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.filtroDataExpiracao = target.value;
    this.filtrarAlunos();
  }
}
