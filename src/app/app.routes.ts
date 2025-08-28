import { Routes } from "@angular/router";
import { AlunosComponent } from "./modules/alunos/alunos.component";
import { TreinoFormComponent } from "./modules/treino-form/treino-form.component";
import { TipoTreinoFormComponent } from "./modules/tipo-treino/tipo-treino.component";
import { AlunoFormComponent } from "./modules/aluno-form/aluno-form.component";
import { AlunoDetalheComponent } from "./modules/aluno-detalhe/aluno-detalhe.component";

export const routes: Routes = [
    { path: 'alunos', component: AlunosComponent },
    { path: 'aluno-form/:alunoId', component: AlunoFormComponent},
    { path: 'aluno-detalhe/:alunoId', component: AlunoDetalheComponent},
    { path: 'treino-form/:alunoId', component: TreinoFormComponent },
    { path: 'tipo-treino-form/:treinoId', component: TipoTreinoFormComponent },
    { path: '', redirectTo: '/alunos', pathMatch: 'full'}
]