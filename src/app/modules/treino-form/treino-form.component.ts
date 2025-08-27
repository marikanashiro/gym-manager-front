import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Treino } from '../../model/treino.model';
import { TipoEstimulo } from '../../model/tipoEstimulo.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-treino-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './treino-form.component.html',
  styleUrl: './treino.component.scss'
})
export class TreinoFormComponent implements OnInit {
  treino: Treino = {
    id: undefined,
    alunoId: 0,
    tipoEstimulo: TipoEstimulo.FORCA,
    dataCriacao: new Date().toISOString().split('T')[0],
    dataExpiracao: '',
    tipoTreinos: []
  };
  alunoId: number = 0;
  tipoEstimulos = Object.values(TipoEstimulo);

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
      this.alunoId = +this.route.snapshot.paramMap.get('alunoId')!;
      this.treino.alunoId = this.alunoId;
  }

  onSubmit() {
    if (!this.treino.dataExpiracao) {
      alert('A data de expiração é obrigatória!');
      return;
    }
    this.apiService.createTreino(this.treino).subscribe({
      next: (response) => {
        alert('Treino criado com sucesso!');
        this.navigateToAlunos();
      },
      error: (err) => {
        console.error('Erro ao criar treino: ', err);
        alert('Erro ao criar treino. Veja o console para mais detalhes (ou chama sua namorada).');
      }
    });
  }

  navigateToAlunos() {
    this.router.navigate(['/alunos']);
  }
}
