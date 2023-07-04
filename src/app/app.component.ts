import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personal-website';
}

// todo:
// add ngx-device-detector
// https://stackoverflow.com/questions/65904777/how-do-i-change-my-angular-component-html-based-on-whether-someone-is-using-a-mo
// https://www.npmjs.com/package/ngx-device-detector
// fix hamburger menu for mobile
