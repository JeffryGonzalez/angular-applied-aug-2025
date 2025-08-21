import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-counter-lab-2',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterOutlet],
  template: `
    <div>
      Counter Stuff Goes Here
      <a routerLink="ui">UI</a>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: ``,
})
export class Counter {}
