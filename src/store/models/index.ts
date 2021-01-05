import {fetchTenDrinks} from './tenDrinks';
import {recommendedBeverage} from './recommendedDrink';
import {Models} from '@rematch/core';

export interface RootModel extends Models<RootModel> {
  fetchTenDrinks: typeof fetchTenDrinks;
  recommendedBeverage: typeof recommendedBeverage;
}

export const models: RootModel = {
  fetchTenDrinks,
  recommendedBeverage
};
