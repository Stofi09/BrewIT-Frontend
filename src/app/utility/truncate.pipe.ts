import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit = 350, append = '... for more information visit the official website'): string {
    if (value.length < limit) {
      return value;
    }

    const lastPeriod = value.lastIndexOf('.', limit);
    const lastQuestion = value.lastIndexOf('?', limit);

    const lastValidBreakpoint = Math.max(lastPeriod, lastQuestion);

    if (lastValidBreakpoint === -1) {
      return `${value.substr(0, limit)}${append}`;
    }

    return `${value.substr(0, lastValidBreakpoint + 1)}${append}`;
  }

}
