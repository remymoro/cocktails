import { Component } from '@angular/core';
import { HeaderMenu } from './components/header-menu';

@Component({
  selector: 'app-header',
  imports: [HeaderMenu],
  template: `
    <div class="flex-auto text-bold text-lg">Cocktails</div>
    <ul class="xs-hide flex flex-row gap-16">
      <li>
        <a href="#">Liste des cocktails</a>
      </li>
      <li>
        <a href="#">Panier</a>
      </li>
    </ul>
    <app-header-menu class=" hide xs-show  " />
  `,
  styles: `
    :host {
      position: relative;
      display: flex;
      align-items:center;
      background-color: var(--primary);
      color: white;
      height: 56px;
      padding: 0 16px;
    }
  `,
})
export class Header {}