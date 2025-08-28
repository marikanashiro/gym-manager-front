import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../model/aluno.model';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-aluno-detalhe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aluno-detalhe.component.html',
  styleUrl: './aluno-detalhe.component.scss'
})
export class AlunoDetalheComponent implements OnInit {
  aluno: Aluno | undefined;
  alunoId: number | undefined;

  constructor(private route: ActivatedRoute, private apiService: ApiService){ }

  ngOnInit(): void {
      console.log('Inicializando AlunoDetalheComponent');
      this.alunoId = +this.route.snapshot.paramMap.get('alunoId')!;
      console.log('Carregando com alunoId: ', this.alunoId);
      if (this.alunoId) {
        this.apiService.getAluno(this.alunoId).subscribe({
          next: (aluno) => {
            this.aluno = { ...aluno, treinos: aluno.treinos || [] };
            if (this.aluno.treinos) {
              this.aluno.treinos.sort((a, b) => new Date(b.dataCriacao).getTime() - new Date(a.dataCriacao).getTime());
            }
            console.log('Aluno carregado: ', this.aluno);
          },
          error: (err) => {
            console.error('Erro ao carregar detalhes do aluno: ', err);
          }
        });
      }
  }
}
