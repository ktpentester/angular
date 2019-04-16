import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorsFilter'
})
export class ColorsFilterPipe implements PipeTransform {

  transform(array : string[]): string[]
  {
    return array.filter(f=>{
      return f.length > 2;
    });
  }

}
