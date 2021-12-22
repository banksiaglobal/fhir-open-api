import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  headerMenu = [
    {
      name: 'Discover',
      link: '#',
    },
    {
      name: 'Reference',
      link: '#',
    },
    {
      name: 'Console',
      link: '#',
    },
    {
      name: 'Community',
      link: '#',
    },
    {
      name: 'Use Cases',
      link: '#',
    },
    {
      name: 'Documentation',
      link: '#',
    },
  ];
}
