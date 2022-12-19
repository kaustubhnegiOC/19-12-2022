import { Component } from '@angular/core';
import { routingComponents } from './app-routing.module';

@Component({
 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-management-app';

  appButttons = true;

  hideButtons(){this.appButttons = false;}
}
