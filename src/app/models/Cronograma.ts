import { MesesEnum } from './enum/MesesEnum';
export class Cronograma{
    idCronograma: number;
    idSupervisor: number;
    mes: MesesEnum;
    ano: number;
    concluido: boolean;
    dataConclusao: Date;
}