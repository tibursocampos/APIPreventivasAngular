import { Pipe, PipeTransform } from '@angular/core';
import { AnfMgEnum } from '../models/enum/AnfMgEnum';


@Pipe({
  name: 'anfMg',
  pure:  false
})
export class AnfMgPipe implements PipeTransform {
  
  public anfList = AnfMgEnum;
  public anfArray: string[] = [];

  transform(value: AnfMgEnum, args?: any[]): string {
    if (value === null || args === undefined){
      return null;
    }
    
    for (let index = 0; index < 6; index++){
      this.anfArray.push(this.anfList[index]);
    }
    
    return this.anfArray[value];
  }

}
