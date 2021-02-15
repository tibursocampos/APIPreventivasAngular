import { TipoAtividadeEnum } from './enum/TipoAtividadeEnum';

export class CronogramaDetalhado{
    endId: string;
    siteGsm: string;
    site3G: string;
    tipoAtividade: TipoAtividadeEnum;
    dataProgramacao: Date;
    dataConclusao: Date;
    concluido: boolean;
}