export type strOrNull = string | null;

export interface allDrinkData {
  dateModified: string;
  idDrink: string;
  strAlcoholic: strOrNull;
  strCategory: strOrNull;
  strCreativeCommonsConfirmed: strOrNull;
  strDrink: string;
  strDrinkAlternate: strOrNull;
  strDrinkDE: strOrNull;
  strDrinkES: strOrNull;
  strDrinkFR: strOrNull;
  strDrinkThumb: strOrNull;
  'strDrinkZH-HANS': strOrNull;
  'strDrinkZH-HANT': strOrNull;
  strGlass: strOrNull;
  strIBA: strOrNull;
  strIngredient1: strOrNull;
  strIngredient10: strOrNull;
  strIngredient11: strOrNull;
  strIngredient12: strOrNull;
  strIngredient13: strOrNull;
  strIngredient14: strOrNull;
  strIngredient15: strOrNull;
  strIngredient2: strOrNull;
  strIngredient3: strOrNull;
  strIngredient4: strOrNull;
  strIngredient5: strOrNull;
  strIngredient6: strOrNull;
  strIngredient7: strOrNull;
  strIngredient8: strOrNull;
  strIngredient9: strOrNull;
  strInstructions: strOrNull;
  strInstructionsDE: strOrNull;
  strInstructionsES: strOrNull;
  strInstructionsFR: strOrNull;
  'strInstructionsZH-HANS': strOrNull;
  'strInstructionsZH-HANT': strOrNull;
  strMeasure1: strOrNull;
  strMeasure10: strOrNull;
  strMeasure11: strOrNull;
  strMeasure12: strOrNull;
  strMeasure13: strOrNull;
  strMeasure14: strOrNull;
  strMeasure15: strOrNull;
  strMeasure2: strOrNull;
  strMeasure3: strOrNull;
  strMeasure4: strOrNull;
  strMeasure5: strOrNull;
  strMeasure6: strOrNull;
  strMeasure7: strOrNull;
  strMeasure8: strOrNull;
  strMeasure9: strOrNull;
  strTags: strOrNull;
  strVideo: strOrNull;
}

export interface drinkList {
  id?: string;
  name: string;
  img: string;
  description?: string;
  ingredients?: Array<string>;
  ingredientAmounts?: Array<string>;
  instructions?: string;
}

export interface SerializedError {
  name?: string;
  message?: string;
  code?: string;
  stack?: string;
}

export interface category {
  strCategory: string;
}
