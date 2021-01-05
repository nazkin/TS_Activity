import {allDrinkData} from '../../models/interfaces';
import {tenCocktailsUrl} from '../../api/endpoints';
import {createModel} from '@rematch/core';
import {RootModel} from './index';
import {Dispatch} from '../store';
import axios from 'axios';

interface TenDrinksListState {
  drinksData: Array<allDrinkData> | null;
}

export const fetchTenDrinks = createModel<RootModel>()({
  state: {
    drinksData: null,
  } as TenDrinksListState,
  reducers: {
    fetchDrinks: (
      state: TenDrinksListState,
      payload: Array<allDrinkData>
    ): TenDrinksListState => {
        return {
          ...state,
          drinksData: payload
        }
    },
  },
  effects: (dispatch: Dispatch) => {
    const {fetchTenDrinks} = dispatch;
    return {
      async fetchDrinkList(): Promise<void> {
        const res = await axios({
          method: 'GET',
          url: tenCocktailsUrl,
          headers: {
            'x-rapidapi-key': process.env.REACT_APP_API,
            'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
            useQueryString: true,
          },
        });
        fetchTenDrinks.fetchDrinks(res.data.drinks);
      },
    };
  },
});
