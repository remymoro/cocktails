import { Component, Input } from '@angular/core';
import { Cocktail } from '../../../models/cocktail.interface';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../../../../../shared/pipes/filter.pipe';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cocktails-list',
  standalone: true,
  imports: [CommonModule, FilterPipe, RouterLink, FormsModule],
  templateUrl: './cocktails-list.component.html',
  styleUrl: './cocktails-list.component.css',
})
export class CocktailsListComponent {
  @Input() public cocktails: Cocktail[] | null = null;
  public search = '';
  constructor() {}

  ngOnInit(): void {}
}
