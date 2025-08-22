/**
 * Composant Cocktails - Angular
 *
 * Ce composant affiche une liste de cocktails et les détails du cocktail sélectionné.
 *
 * Fonctionnement général :
 * - On importe les outils Angular pour la réactivité :
 *   - signal : permet de créer une donnée réactive (comme un state)
 *   - computed : permet de calculer une valeur à partir d'autres signaux
 *   - effect : permet de réagir à des changements de signaux (non utilisé ici)
 * - On importe les composants enfants :
 *   - CocktailsList : affiche la liste des cocktails
 *   - CocktailDetails : affiche les détails du cocktail sélectionné
 * - On importe le type Cocktail pour typer nos données
 * - On importe la liste des cocktails (données statiques)
 *
 * Le décorateur @Component permet de définir un composant Angular :
 *   - selector : le nom de la balise à utiliser dans le HTML
 *   - imports : les composants enfants utilisés dans le template
 *   - template : le HTML du composant (avec des liaisons de propriétés et d'événements)
 *   - styles : le CSS du composant
 *
 * Dans le template :
 *   - [selectedCocktailName]="selectedCocktailName()" :
 *     Liaison de propriété. On transmet au composant enfant le nom du cocktail sélectionné.
 *     Cela permet à l’enfant de savoir quel cocktail est sélectionné (pour le surligner par exemple).
 *     La valeur provient d’un signal calculé (computed) dans le composant parent, donc elle se met à jour automatiquement.
 *     Côté enfant, il faut déclarer un @Input() selectedCocktailName: string; pour recevoir cette valeur.
 *   - (selectCocktail)="selectCocktail($event)" :
 *     Liaison d’événement. Le composant enfant émet un événement quand un cocktail est sélectionné.
 *     Le parent reçoit le nom du cocktail sélectionné et met à jour l’affichage.
 *   - [cocktails]="cocktails()" :
 *     Passe la liste des cocktails à l’enfant.
 *   - [cocktail]="selectedCocktail()" :
 *     Passe le cocktail sélectionné au composant de détails.
 *
 * Dans la classe :
 *   - cocktails : signal contenant la liste des cocktails (réactif)
 *   - selectedCocktail : signal contenant le cocktail actuellement sélectionné (réactif)
 *   - selectedCocktailName : signal calculé qui donne le nom du cocktail sélectionné
 *   - selectCocktail : méthode appelée quand l'utilisateur sélectionne un cocktail dans la liste
 *     Elle reçoit le nom du cocktail sélectionné, cherche l'objet correspondant et le met à jour
 */

// On importe les outils Angular pour la réactivité :
// - signal : permet de créer une donnée réactive (comme un state)
// - computed : permet de calculer une valeur à partir d'autres signaux
// - effect : permet de réagir à des changements de signaux (non utilisé ici)
import { Component, computed, effect, signal } from '@angular/core';

// On importe les composants enfants utilisés dans ce composant :
// - CocktailsList : affiche la liste des cocktails
// - CocktailDetails : affiche les détails du cocktail sélectionné
import { CocktailsList } from './components/cocktails-list';
import { CocktailDetails } from './components/cocktail-details';

// On importe le type Cocktail pour typer nos données
import { Cocktail } from 'app/shared/interfaces';

// On importe la liste des cocktails (données statiques)
import { cocktails } from 'app/shared/data/cocktails.data';






// Le décorateur @Component permet de définir un composant Angular
@Component({
  selector: 'app-cocktails', // Le nom de la balise à utiliser dans le HTML
  imports: [CocktailsList, CocktailDetails], // Les composants enfants utilisés dans le template
  template: `
    <app-cocktails-list
      (selectCocktail)="selectCocktail($event)"
      [selectedCocktailName]="selectedCocktailName()"
      [cocktails]="cocktails()"
      class="w-half xs-w-full card"
    />
    <app-cocktail-details
      [cocktail]="selectedCocktail()"
      class="w-half xs-w-full card"
    />
  `,
  styles: `
    :host {
      display: flex;
      gap:24px;
      padding: 24px;
      @media screen and (max-width: 820px) {
        flex-direction: column;
      }
    }
  `,
})
// La classe du composant : toute la logique JS/TS ici
export class Cocktails {
  // Signal contenant la liste des cocktails (réactif)
  cocktails = signal<Cocktail[]>(cocktails);

  // Signal contenant le cocktail actuellement sélectionné (réactif)
  selectedCocktail = signal<Cocktail>(this.cocktails()[0]);

  // Signal calculé : donne le nom du cocktail sélectionné
  selectedCocktailName = computed(() => this.selectedCocktail().name);

  // Méthode appelée quand l'utilisateur sélectionne un cocktail dans la liste
  // Elle reçoit le nom du cocktail sélectionné, cherche l'objet correspondant et le met à jour
  selectCocktail(cocktailName: string) {
    const newCocktail = this.cocktails().find(
      ({ name }) => name === cocktailName
    );
    if (newCocktail) {
      this.selectedCocktail.set(newCocktail);
    }
  }
}