import {fetchTenDrinks} from './tenDrinks.model';

export interface RootModel {
  fetchTenDrinks: typeof fetchTenDrinks;
}

export const models: RootModel = {fetchTenDrinks};
