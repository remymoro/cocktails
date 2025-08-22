import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer';
import { Cocktails } from './components/cocktails/cocktails';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Cocktails],
  template: `
    <app-header />
    <app-cocktails class="flex-auto" />
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
export class App {}