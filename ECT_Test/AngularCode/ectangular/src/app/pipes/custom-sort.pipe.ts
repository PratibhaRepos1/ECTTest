import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customSort'
})
export class CustomSortPipe implements PipeTransform {

  transform(value: any[], column: any): any[] {
    if (typeof (column) === 'string') {
      let sortdirection: number = 1;
      if (column.charAt(0) === '-') {
        column = column.substring(1);
        sortdirection = -1;

      }

      return value.sort((item, item2) => {
        let a;
        let b;

        if (typeof (item[column]) === 'string' && typeof (item2[column]) === 'string') {
          a = item[column].toLowerCase();
          b = item2[column].toLowerCase();
        }
        else {
          a = item[column];
          b = item2[column];
        }
        if (a > b) return 1 * sortdirection;
        if (a < b) return -1 * sortdirection;
        else return 0;

      });
    }//string check end here


    ////Array String check  here
    if (typeof (column) === 'object') {
      return value.sort((a, b) => {
        if (column[0] === 'name') {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          if (column[1] === 'price') return a.price - b.price;
          if (column[1] === '-price') return b.price - a.price;
          else return 0;

        }
      });
    }
  }//end of transform

}
