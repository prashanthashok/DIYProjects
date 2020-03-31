import { Recipe } from '../shared/models/recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
 
    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel', 
            "This is a Schnitzel", 
            "https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG",
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'Big fat burger', 
            "This is a burger", 
            "https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg",
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ]),
      ];
      
      constructor(private shoppingListService: ShoppingListService){}

      getRecipes(){
          return this.recipes.slice();
      }

      getRecipeById(id: number): Recipe{
          return this.recipes[id];
      }

      AddIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
      }

}