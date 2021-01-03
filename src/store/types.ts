import {allDrinkData} from '../models/interfaces';

export interface TenDrinksState {
  tenDrinks: Array<allDrinkData> | null;
  error: string;
}
