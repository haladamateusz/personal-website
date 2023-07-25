import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { faMobile, faEnvelope } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, MatButtonModule, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly icons = {
    linkedin: faLinkedin,
    github: faGithub,
    mail: faEnvelope,
    phone: faMobile
  };

  title = 'personal-website';
}

// todo:
// add ngx-device-detector
// https://stackoverflow.com/questions/65904777/how-do-i-change-my-angular-component-html-based-on-whether-someone-is-using-a-mo
// https://www.npmjs.com/package/ngx-device-detector
// fix hamburger menu for mobile
