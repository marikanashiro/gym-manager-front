import { Component } from '@angular/core';
import { Aluno } from '../../model/aluno.model';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  standalone: true
})
export class AlunoFormComponent {
  novoAluno: Aluno = {id: 0, nome: '', telefone: '', email: '', endereco: '', dataNascimento: ''};

  constructor(private apiService: ApiService) { }

  salvarAluno() {
    this.apiService.createAluno(this.novoAluno).subscribe(() => {
      this.novoAluno = {id: 0, nome: '', telefone: '', email: '', endereco: '', dataNascimento: ''};
      alert('Aluno salvo!');
    });
  }
}
