import { Component, inject, isDevMode } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainMenuComponent } from './shared/ui/menus/main-menu/main-menu.component';
import { CocktailService } from './feature/cocktails/services/cocktail.service';
import { CocktailContainerComponent } from './feature/cocktails/components/cocktail-container/cocktail-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainMenuComponent, CocktailContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private cocktailService: CocktailService = inject(CocktailService);

  ngOnInit(): void {
    this.cocktailService.fetchCocktails().subscribe();
    if (isDevMode()) {
      console.log('Mode Développement');
    } else {
      console.log('Mode Production');
    }
  }
}
