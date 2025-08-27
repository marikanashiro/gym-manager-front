import { GrupoMuscular } from "./grupoMuscular.model";

export interface TipoTreino {
    id?: number;
    treinoId: number;
    gruposMusculares: GrupoMuscular[];
    quantidadeSeries: number;
    quantidadeRepeticoes: number;
    exercicios: string;
}