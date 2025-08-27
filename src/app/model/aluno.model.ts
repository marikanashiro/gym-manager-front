import { Treino } from "./treino.model";

export interface Aluno {
    id?: number;
    nome: string;
    telefone: string;
    email: string;
    endereco: string;
    dataNascimento: string;
    treinos?: Treino[];
}