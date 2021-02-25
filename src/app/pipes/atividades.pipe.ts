import { Pipe, PipeTransform } from '@angular/core';
import { TipoAtividadeEnum } from '../models/enum/TipoAtividadeEnum';

@Pipe({
  name: 'atividades'
})
export class AtividadesPipe implements PipeTransform {
  
  public tipoAtividadeList = TipoAtividadeEnum;
  public tipoAtividadeArray: string[] = [];

  transform(value: TipoAtividadeEnum, args?: any[]): string {
    if (value === undefined || args === undefined){
      return null;
    }
    
    for(let index = 0; index < 5; index++){
      this.tipoAtividadeArray.push(this.tipoAtividadeList[index]);
    } 
      
    return this.tipoAtividadeArray[value];
  }


}
