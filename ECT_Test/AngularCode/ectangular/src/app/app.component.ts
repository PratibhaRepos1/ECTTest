import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ectangular';
  data: any = [{ name: 'A' }, { name: 'B' }, { name: 'C' }];
}
