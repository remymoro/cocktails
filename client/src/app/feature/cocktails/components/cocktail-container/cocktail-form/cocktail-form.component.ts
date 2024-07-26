import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { CocktailService } from '../../../services/cocktail.service';
import { Cocktail } from '../../../models/cocktail.interface';
import { first } from 'rxjs';

@Component({
  selector: 'app-cocktail-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './cocktail-form.component.html',
  styleUrl: './cocktail-form.component.css',
})
export class CocktailFormComponent {
  private readonly formBuilder: FormBuilder = inject(FormBuilder);
  private readonly cocktailService: CocktailService = inject(CocktailService);
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  public cocktailForm!: FormGroup;
  private readonly router: Router = inject(Router);
  public cocktail?: Cocktail;

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const index = paramMap.get('index');
      if (index !== null) {
        this.cocktailService
          .getCocktail(Number(index))
          .pipe(first((x) => !!x))
          .subscribe((cocktail: Cocktail) => {
            this.cocktail = cocktail;
            this.cocktailForm = this.initForm(this.cocktail);
          });
      } else {
        this.cocktailForm = this.initForm();
      }
    });
  }

  private initForm(
    cocktail: Cocktail = { name: '', description: '', img: '', ingredients: [] }
  ): FormGroup {
    return this.formBuilder.group({
      name: [cocktail.name, Validators.required],
      img: [cocktail.img, Validators.required],
      description: [cocktail.description, Validators.required],
      ingredients: this.formBuilder.array(
        cocktail.ingredients.map((ingredient) =>
          this.formBuilder.group({
            name: [ingredient.name, Validators.required],
            quantity: [ingredient.quantity, Validators.required],
          })
        ),
        Validators.required
      ),
    });
  }

  public get ingredients() {
    return this.cocktailForm.get('ingredients') as FormArray;
  }

  public addIngredient(): void {
    this.ingredients.push(
      this.formBuilder.group({
        name: ['', Validators.required],
        quantity: [0, Validators.required],
      })
    );
  }

  public submit(): void {
    if (this.cocktail?.id) {
      this.cocktailService
        .editCocktail(this.cocktail.id, this.cocktailForm.value)
        .subscribe();
    } else {
      this.cocktailService.addCocktail(this.cocktailForm.value).subscribe();
    }
    this.router.navigate(['..'], { relativeTo: this.activatedRoute });
  }
}
