import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TipoTreino } from '../../model/tipoTreino.model';
import { GrupoMuscular } from '../../model/grupoMuscular.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-tipo-treino-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tipo-treino.component.html',
  styleUrl: './tipo-treino.component.scss'
})
export class TipoTreinoFormComponent implements OnInit {
  tipoTreino: TipoTreino = {
    id: undefined,
    treinoId: 0,
    gruposMusculares: [],
    quantidadeSeries: 0,
    quantidadeRepeticoes: 0,
    exercicios: ''
  };
  treinoId: number = 0;
  gruposMusculares = Object.values(GrupoMuscular);

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
      this.treinoId = +this.route.snapshot.paramMap.get('treinoId')!;
      this.tipoTreino.treinoId = this.treinoId;
  }

  onSubmit() {
    if (!this.tipoTreino.gruposMusculares.length || !this.tipoTreino.exercicios) {
      alert('Selecione pelo menos um grupo muscular e informe os exercícios.');
      return;
    }
    this.apiService.createTipoTreino(this.tipoTreino).subscribe({
      next: (response) => {
        alert('Tipo de Treino criado com sucesso!');
        this.navigateToTreinoForm();
      },
      error: (err) => {
        console.error('Erro ao criar tipo de treino: ', err);
        alert('Erro ao criar tipo de treino. Veja console para detalhes (ou pede ajuda pra gatinha).');
      }
    });
  }

  addGrupoMuscular(grupo: GrupoMuscular) {
    if (!this.tipoTreino.gruposMusculares.includes(grupo)) {
      this.tipoTreino.gruposMusculares.push(grupo);
    }
  }

  removeGrupoMuscular(grupo: GrupoMuscular) {
    this.tipoTreino.gruposMusculares = this.tipoTreino.gruposMusculares.filter(g => g !== grupo);
  }

  navigateToTreinoForm() {
    this.router.navigate([`/treino-form/${this.treinoId}`]);
  }
}
