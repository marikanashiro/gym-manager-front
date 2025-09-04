import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './modules/alunos/alunos.component';
import { AlunoFormComponent } from './modules/aluno-form/aluno-form.component';
import { TreinoFormComponent } from './modules/treino-form/treino-form.component';
import { TipoTreinoFormComponent } from './modules/tipo-treino/tipo-treino.component';
import { AlunoDetalheComponent } from './modules/aluno-detalhe/aluno-detalhe.component';

export const routes: Routes = [
    { path: '', redirectTo: '/alunos', pathMatch: 'full' },
    { path: 'alunos', component: AlunosComponent },
    { path: 'aluno-form/:alunoId', component: AlunoFormComponent },
    { path: 'aluno-detalhe/:alunoId', component: AlunoDetalheComponent },
    { path: 'aluno-form', component: AlunoFormComponent},
    { path: 'treino-form/:alunoId', component: TreinoFormComponent },
    { path: 'tipo-treino-form/:treinoId', component: TipoTreinoFormComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }