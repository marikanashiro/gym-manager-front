import { TipoEstimulo } from "./tipoEstimulo.model";
import { TipoTreino } from "./tipoTreino.model";

export interface Treino {
    id?: number;
    alunoId: number;
    dataCriacao: string;
    dataExpiracao: string;
    tipoEstimulo: TipoEstimulo;
    tipoTreinos?: TipoTreino[];
}