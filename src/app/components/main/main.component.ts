import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-main',
  template: `
    <app-header></app-header>

    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        // Cuando ocurre una navegación exitosa, desplázate hacia arriba
        window.scrollTo(0, 0);
      });
  }
}
