import { Pipe, PipeTransform } from '@angular/core';
import { TipoUsuarioEnum } from '../models/enum/TipoUsuarioEnum';

@Pipe({
  name: 'permissao',
  pure: false
})
export class PermissaoPipe implements PipeTransform {
  
  public permissaoList = TipoUsuarioEnum;
  public permissaoArray: string[]= [];

  transform(value: TipoUsuarioEnum, args?: any[]): string {
    if (value === undefined || args === undefined){
      return null;
    }
    
    for (let index = 1; index < 4; index++){
      this.permissaoArray.push(this.permissaoList[index]);
    }    
    return this.permissaoArray[value-1];
  }

}
