import { Aluno } from "./aluno.model";

export enum TipoTreino {
    A = 'A',
    B = 'B',
    C = 'C',
    D = 'D',
    E = 'E'
}

export enum GrupoMuscular {
    TRAPEZIO = 'TRAPEZIO', 
    DELTOIDE = 'DELTOIDE', 
    PEITORAL = 'PEITORAL', 
    DORSAL = 'DORSAL', 
    ISQUIOTIBIAL = 'ISQUIOTIBIAL', 
    QUADRICEPS = 'QUADRICEPS', 
    GLUTEO = 'GLUTEO', 
    BICEPS = 'BICEPS', 
    TRICEPS = 'TRICEPS', 
    ANTEBRACO = 'ANTEBRACO', 
    PANTURRILHA = 'PANTURRILHA', 
    ABDOMINAL = 'ABDOMINAL'
}

export enum TipoEstimulo {
    FORCA = 'FORCA', 
    METABOLICO = 'METABOLICO', 
    HIPERTROFIA = 'HIPERTROFIA', 
    RESISTENCIA = 'RESISTENCIA', 
    ESPECIFICO = 'ESPECIFICO'
}

export interface Treino {
    id: number;
    aluno: Aluno;
    tipoTreino: TipoTreino;
    gruposMusculares: GrupoMuscular[];
    quantidadeSeries: number;
    quantidadeRepeticoes: number;
    carga: number;
    tipoEstimulo: TipoEstimulo;
}