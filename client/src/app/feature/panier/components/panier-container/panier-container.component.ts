import { Component, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { Ingredient } from '../../models/ingredient.interface';
import { PanierService } from '../../services/panier.service';

@Component({
  selector: 'app-panier-container',
  standalone: true,
  imports: [IngredientListComponent],
  templateUrl: './panier-container.component.html',
  styleUrl: './panier-container.component.css',
})
export class PanierContainerComponent {
  public ingredients: Ingredient[] | null = null;
  private panierService: PanierService = inject(PanierService);

  public subscription?: Subscription;

  ngOnInit() {
    this.subscription = this.panierService.ingredients$.subscribe(
      (ingredients: Ingredient[] | null) => (this.ingredients = ingredients)
    );
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
