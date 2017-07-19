import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipe: IRecipe = {
    'recipeId': 1,
    'name': 'Fish sticks and Rice',
    'price': 2.0,
    'time': 20,
    'image': 'fishsticks-mine',
    'recipeIngredients': [{
      'recipeIngredientId': 1,
      'ingredient': {
        'ingredientId': 1,
        'name': 'Fish sticks', 'Type': 'fish'
      },
      'amount': 2.0,
      'amountType': 'Portions of'
    }, {
      'recipeIngredientId': 2,
      'ingredient': {
        'ingredientId': 2,
        'name': 'Rice',
        'Type': 'Pasta'
      },
      'amount': 2.0,
      'amountType': 'Portions of'
    }, {
      'recipeIngredientId': 3,
      'ingredient': {
        'ingredientId': 3,
        'name': 'Mayonaise',
        'Type': 'Condiment'
      },
      'amount': null,
      'amountType': null
    }, {
      'recipeIngredientId': 4,
      'ingredient': {
        'ingredientId': 4,
        'name': 'Water',
        'Type': 'Condiment'
      },
      'amount': null,
      'amountType': null
    }],
    'recipeInstructions': [{
      'recipeInstructionId': 1,
      'instructionText': 'Follow instructions on rice package to make rice'
    }, {
      'recipeInstructionId': 2,
      'instructionText': 'Fry fish sticks'
    }, {
      'recipeInstructionId': 3,
      'instructionText': 'Plate and serve with mayo'
    }]
  };

  constructor() { }

  ngOnInit() {
  }

}
