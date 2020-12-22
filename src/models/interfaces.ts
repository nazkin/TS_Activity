export interface drinkList {
  id?: string;
  name: string;
  img: string;
  description?: string;
  ingredients?: Array<string>;
  ingredientAmounts?: Array<string>;
  instructions?: string;
}

export interface category {
  strCategory: string;
}
