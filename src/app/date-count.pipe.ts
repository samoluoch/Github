import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(updated_at: any, args?: any): any {
    const today: Date = new Date();
    const todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const dateChange = Math.abs(updated_at - todayWithNoTime);
    const secondsInADay = 86400;

    const dateChangeSeconds = dateChange * 0.001;

    const dateCount = dateChangeSeconds / secondsInADay;

    if (dateCount <= 1) {
      return dateCount;
    } else {
      return 0;
    }

  }

}
