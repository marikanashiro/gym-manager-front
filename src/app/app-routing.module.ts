import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './modules/alunos/alunos.component';
import { AlunoFormComponent } from './modules/aluno-form/aluno-form.component';
import { TreinosComponent } from './modules/treinos/treinos.component';
import { TreinoFormComponent } from './modules/treino-form/treino-form.component';
import { TipoTreinoFormComponent } from './modules/tipo-treino/tipo-treino.component';

export const routes: Routes = [
    { path: 'alunos', component: AlunosComponent },
    { path: 'treino-form/:alunoId', component: TreinoFormComponent },
    { path: 'tipo-treino-form/:treinoId', component: TipoTreinoFormComponent},
    { path: '', redirectTo: '/alunos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }