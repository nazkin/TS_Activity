import {fetchTenDrinks} from './tenDrinks';
import {Models} from '@rematch/core';

export interface RootModel extends Models<RootModel> {
  fetchTenDrinks: typeof fetchTenDrinks;
}

export const models: RootModel = {
  fetchTenDrinks,
};
