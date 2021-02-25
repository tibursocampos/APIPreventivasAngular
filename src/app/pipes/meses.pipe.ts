import { Pipe, PipeTransform } from '@angular/core';
import { MesesEnum } from '../models/enum/MesesEnum';

@Pipe({
  name: 'meses'
})
export class MesesPipe implements PipeTransform {
  
  public meses = MesesEnum;
  public mesesArray: string[] = [];

  transform(value: MesesEnum, args?: any[]): string {
    if (value === undefined || args === undefined){
      return null;
    }
    
    for (let index = 1; index < 13; index++) {
      this.mesesArray.push(this.meses[index]);     
    }    
    return this.mesesArray[value-1];
  }

}
