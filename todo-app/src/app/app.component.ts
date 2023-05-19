import { Component } from '@angular/core';
import { ClarityIcons, cogIcon } from '@cds/core/icon';
ClarityIcons.addIcons(cogIcon);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list-app-2';
}
