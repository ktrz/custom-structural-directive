import { Component } from '@angular/core';

@Component({
  selector: 'csd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'custom-structural-directive';
  show = true;
  showIfElse = true;
  showIfThenElse = true;

  items = [1, 2, 3, 4, 5];
}
