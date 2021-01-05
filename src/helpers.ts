import * as interfaces from './models/interfaces';

export const destructureCocktailIngredients = (
  drinkData: any
): interfaces.drinkList => {
  const ingArr: Array<string> = [];
  const amountArr: Array<string> = [];

  for (let i = 0; i < 15; i++) {
    const ithIngredient = `strIngredient${i + 1}`;
    const ithAmount = `strMeasure${i + 1}`;

    if (drinkData[ithIngredient] !== null) {
      ingArr.push(drinkData[ithIngredient].trim());
    }

    if (!drinkData[ithAmount] && drinkData[ithIngredient]) {
      amountArr.push('to your taste');
    } else if (drinkData[ithAmount] && drinkData[ithIngredient]) {
      amountArr.push(drinkData[ithAmount].trim());
    }
  }

  const obj: interfaces.drinkList = {
    id: drinkData.idDrink,
    name: drinkData.strDrink,
    img: drinkData.strDrinkThumb,
    description: drinkData.strAlcoholic + ' ' + drinkData.strCategory,
    ingredients: ingArr,
    ingredientAmounts: amountArr,
    instructions: drinkData.strInstructions,
  };
  return obj;
};

export const destructureListOfCocktails = (drinksListData: any[]) => {
  return drinksListData.map((drink: any) => destructureCocktailIngredients(drink));
}
