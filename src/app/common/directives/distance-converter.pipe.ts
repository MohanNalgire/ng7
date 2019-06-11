import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'distanceConverter'
})
export class DistanceConverterPipe implements PipeTransform {

  transform(value: any, fromUnit:string): any {
    switch(fromUnit){
      case 'm':return value*0.000621371;break;
      case 'km':return value*0.621371;break;
    }
  }
  /**
   * Related use case example.
   * <div>{{40:distanceConverter:'m'}}</div>
   */

}