import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { faGithub, faLinkedin, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, MatButtonModule, FontAwesomeModule, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // animations: [
  //   trigger('cardsAnimation', [
  //     transition('* => *', [
  //       query('.card', style({ opacity: 0, transform: 'translateY(-100%)' })),
  //       query('.card', stagger('200ms', [animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))]))
  //     ])
  //   ])
  // ]
})
export class AppComponent {
  readonly contactInfo: { icon: IconDefinition; display: string; link?: string }[] = [
    { icon: faLinkedin, display: '/in/haladamateusz', link: 'https://www.linkedin.com/in/haladamateusz/' },
    { icon: faGithub, display: '/haladamateusz', link: 'https://www.github.com/haladamateusz/' },
    { icon: faEnvelope, display: 'haladamateusz (at) gmail.com' },
    { icon: faMobile, display: '+41 078 241 13 08' }
  ];

  readonly skillsInfo: { field: string; skills: string[] }[] = [
    {
      field: 'Frontend',
      skills: ['Angular', 'Ionic', 'RXJS', 'NGRX', 'NX', 'Jest', 'Cypress']
    },
    {
      field: 'Backend',
      skills: ['.NET', 'Django', 'NestJS']
    },
    {
      field: 'Devops',
      skills: ['Docker', 'CI/CD', 'S3', 'Cloud hosting']
    },
    {
      field: 'Databases',
      skills: ['SQL', 'PostgreSQL', 'MongoDB']
    }
  ];

  readonly educationInfo: { university: string; description: string }[] = [
    {
      university: '🇱🇺 University of Luxembourg',
      description: 'Computer science, Erasmus+ Programme'
    },
    {
      university: '🇵🇱 University of Cardinal Wyszyński in Warsaw',
      description: "Computer science, Master's Degree"
    }
  ];

  title = 'personal-website';
}

// todo:
// add ngx-device-detector
// https://stackoverflow.com/questions/65904777/how-do-i-change-my-angular-component-html-based-on-whether-someone-is-using-a-mo
// https://www.npmjs.com/package/ngx-device-detector
// fix hamburger menu for mobile
