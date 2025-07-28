import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './modules/alunos/alunos.component';
import { AlunoFormComponent } from './modules/aluno-form/aluno-form.component';
import { TreinosComponent } from './modules/treinos/treinos.component';
import { TreinoFormComponent } from './modules/treino-form/treino-form.component';

export const routes: Routes = [
    { path: 'alunos', component: AlunosComponent },
    { path: 'aluno-form', component: AlunoFormComponent },
    { path: 'treinos', component: TreinosComponent },
    { path: 'treino-form', component: TreinoFormComponent },
    { path: '', redirectTo: '/alunos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }