import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Cocktail } from '../../../models/cocktail.interface';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CocktailService } from '../../../services/cocktail.service';
import { PanierService } from '../../../../panier/services/panier.service';

@Component({
  selector: 'app-cocktail-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cocktail-details.component.html',
  styleUrl: './cocktail-details.component.css',
})
export class CocktailDetailsComponent {
  public cocktail!: Cocktail;

  private activateRoute: ActivatedRoute = inject(ActivatedRoute);
  private cocktailService: CocktailService = inject(CocktailService);
  private panierService: PanierService = inject(PanierService);

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((paraMap: ParamMap) => {
      const cocktailIndex = paraMap.get('index');
      if (cocktailIndex) {
        this.cocktail = this.cocktailService.getCocktail(+cocktailIndex);
      }
    });
  }

  public addToPanier() {
    this.panierService.addPanier(this.cocktail.ingredients);
  }
}
