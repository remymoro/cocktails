import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Ingredient } from '../../../models/ingredient.interface';

@Component({
  selector: 'app-ingredient-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ingredient-list.component.html',
  styleUrl: './ingredient-list.component.css',
})
export class IngredientListComponent {
  @Input() public ingredients: Ingredient[] | null = null;
}
