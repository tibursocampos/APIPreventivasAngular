import { AnfMgEnum } from './enum/AnfMgEnum';
import { EstadoBrEnum } from './enum/EstadoBrEnum';
export class Site{
    idSite: number;
    endId: string;
    siteGsm: string;
    site3g: string;
    siteLte: string;
    cidade: string;
    estado: EstadoBrEnum;
    anf: AnfMgEnum;
}