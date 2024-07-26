import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Cocktail } from '../../../models/cocktail.interface';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { CocktailService } from '../../../services/cocktail.service';
import { PanierService } from '../../../../panier/services/panier.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cocktail-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cocktail-details.component.html',
  styleUrl: './cocktail-details.component.css',
})
export class CocktailDetailsComponent {
  public cocktail!: Cocktail;

  private cocktailService: CocktailService = inject(CocktailService);
  private panierService: PanierService = inject(PanierService);
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private subscription!: Subscription;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
      this.subscription = this.cocktailService
        .getCocktail(+paramMap.get('index')!)
        .subscribe((cocktail: Cocktail) => {
          this.cocktail = cocktail;
        });
    });
  }

  public addToPanier() {
    this.panierService.addPanier(this.cocktail.ingredients);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
