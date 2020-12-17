import * as interfaces from "./models/interfaces"

export const destructureCocktailIngredients = (drinkData:any): interfaces.drinkList => {
    const ingArr:Array<string> = [];
    const amountArr:Array<string> = [];

    for(let i:number = 0; i < 15; i++) {
      let ithIngredient= `strIngredient${i+1}`;
      let ithAmount = `strMeasure${i+1}`;

      if(drinkData[ithIngredient] !== null) {
        ingArr.push(drinkData[ithIngredient].trim())
      }

      if(!drinkData[ithAmount] && drinkData[ithIngredient]){
        amountArr.push("to your taste");
      }else if(drinkData[ithAmount] && drinkData[ithIngredient]){
        amountArr.push(drinkData[ithAmount].trim());
      }

    }

    let obj: interfaces.drinkList = {
      id: drinkData.idDrink,
      name: drinkData.strDrink,
      img: drinkData.strDrinkThumb,
      description: drinkData.strAlcoholic + " " + drinkData.strCategory,
      ingredients: ingArr,
      ingredientAmounts: amountArr,
      instructions: drinkData.strInstructions,
    };
    return obj;
}

