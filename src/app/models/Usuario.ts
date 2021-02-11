import { AreaTecnicoEnum } from './enum/AreaTecnicoEnum';
import { TipoUsuarioEnum } from './enum/TipoUsuarioEnum';
import { AnfMgEnum } from './enum/AnfMgEnum';
export class Usuario{
    idUsuario: number;
    cpf: string;
    primeiroNome: string;
    ultimoNome: string;
    email: string;
    senha: string;
    anf: AnfMgEnum;
    permissao: TipoUsuarioEnum;
    area: AreaTecnicoEnum;
}