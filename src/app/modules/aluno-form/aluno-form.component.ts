import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../model/aluno.model';
import { ApiService } from '../../service/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-aluno-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './aluno-form.component.html',
  styleUrl: './aluno-form.component.scss'
})
export class AlunoFormComponent implements OnInit {
  aluno: Aluno = {id: undefined, nome: '', telefone: '', email: '', endereco: '', dataNascimento: '', treinos: [] };
  alunoId: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router) { }

  ngOnInit(): void {
      console.log('Inicializando AlunoFormComponent');
      this.alunoId = +this.route.snapshot.paramMap.get('alunoId')!;
      console.log('AlunoId recebido: ', this.alunoId);
      if (this.alunoId) {
        this.apiService.getAluno(this.alunoId).subscribe({
          next: (aluno) => {
            this.aluno = { ...aluno, treinos: aluno.treinos || [] };
            console.log('Aluno carregado no form: ', this.aluno);
          },
          error: (err) => {
            console.error('Erro ao carregar aluno: ', err);
          }
        });
    }
  }

  onSubmit() {
    if (this.alunoId) {
      this.apiService.updateAluno(this.alunoId, this.aluno).subscribe({
        next: () => {
          alert('Aluno atualizado com sucesso!');
          this.router.navigate(['/alunos']);
        },
        error: (err) => {
          console.error('Erro ao atualizar aluno: ', err);
          alert('Erro ao atualizar aluno.');
        }
      });
    } else {
      this.apiService.createAluno(this.aluno).subscribe({
        next: () => {
          alert('Aluno criado com sucesso!');
          this.router.navigate(['/alunos']);
        },
        error: (err) => {
          console.error('Erro ao criar aluno: ', err);
          alert('Erro ao criar aluno.');
        }
      });
    }
  }

  cancelar() {
    this.router.navigate(['/alunos']);
  }
}
