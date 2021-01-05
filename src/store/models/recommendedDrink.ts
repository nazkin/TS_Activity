import {allDrinkData} from '../../models/interfaces';
import {randomCocktailUrl} from '../../api/endpoints';
import {createModel} from '@rematch/core';
import {RootModel} from './index';
import {Dispatch} from '../store';
import axios from 'axios';

interface RecommendedDrinkState {
    recommendedDrink: allDrinkData | null;
}
  
export const recommendedBeverage = createModel<RootModel>()({
  state: {
    recommendedDrink: null,
  } as RecommendedDrinkState,
  reducers: {
    fetchRecommended: (
      state: RecommendedDrinkState,
      payload: allDrinkData
    ) => {
      return {
        ...state, 
        recommendedDrink: payload
      }
    },
  },
  effects: (dispatch: Dispatch) => {
    const {recommendedBeverage} = dispatch;
    return {
      async fetchRecommendedAsync(): Promise<void> {
        const res = await axios({
          method: 'GET',
          url: randomCocktailUrl,
          headers: {
            'x-rapidapi-key': process.env.REACT_APP_API,
            'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
            useQueryString: true,
          },
        });
        recommendedBeverage.fetchRecommended(res.data.drinks[0]);
      },
    };
  },
});
