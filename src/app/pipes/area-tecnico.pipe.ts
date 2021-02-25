
import { Pipe, PipeTransform } from '@angular/core';
import { AreaTecnicoEnum } from '../models/enum/AreaTecnicoEnum';

@Pipe({
  name: 'areaTecnico',
  pure:  false
})
export class AreaTecnicoPipe implements PipeTransform {
  public setorList = AreaTecnicoEnum;
  public setorArray: string[] = [];

  transform(value: AreaTecnicoEnum, args?: any[]): string {
    if (value === undefined || args === undefined){
      return null;
    }
    
    for (let index = 0; index < 3; index++){
      this.setorArray.push(this.setorList[index]);
    }    
    return this.setorArray[value];
  }

}
