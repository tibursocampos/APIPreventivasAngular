
import { Pipe, PipeTransform } from '@angular/core';
import { EstadoBrEnum } from '../models/enum/EstadoBrEnum';

@Pipe({
  name: 'estadosBr',
  pure: false
})
export class EstadosBrPipe implements PipeTransform {
  public estadoList = EstadoBrEnum;
  public estadosArray: string[] = [];

  transform(value: EstadoBrEnum, args?: any[]): string {
    if (value === 0 || args === undefined){
      return null;
    }
    
    for (let index = 0; index < 27; index++){
      this.estadosArray.push(this.estadoList[index]);
    }
    
    return this.estadosArray[value];
    
  }

}
