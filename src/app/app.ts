import { Component } from '@angular/core';
import { HeaderComponent } from './components/header';
import { FooterComponent } from './components/footer';



@Component({
  selector: 'app-root',
  imports: [HeaderComponent,FooterComponent],
  template: `
    <app-header />
    <app-footer />
  `,
  styles: `
    :host {
      min-height: 100vh;
      display:flex;
      flex-direction:column;
    }
 `,
})
export class AppComponent {}