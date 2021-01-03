import {allDrinkData} from '../../models/interfaces';
import {TenDrinksState} from '../types';
import {tenCocktailsUrl} from '../../api/endpoints';
import {Dispatch} from '../store';
import axios from 'axios';

// interface State {
//   tenDrinks: Array<allDrinkData> | null;
//   error: string;
// }

const initState: TenDrinksState = {
  tenDrinks: null,
  error: '',
};

const fetchTenDrinks = {
  state: initState,
  reducers: {
    fetchDrinks(state: TenDrinksState, payload: Array<allDrinkData>) {
      return {
        ...state,
        tenDrinks: payload,
      };
    },
    setError(state: TenDrinksState, payload: string) {
      return {
        ...state,
        error: payload,
      };
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  effects: (dispatch: any) => ({
    async fetchDrinkList() {
      const {data} = await axios({
        method: 'GET',
        url: tenCocktailsUrl,
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_API,
          'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
          useQueryString: true,
        },
      });

      if (!data) {
        dispatch.fetchTenDrinks.setError('Could not fetch drinks');
      }
      dispatch.fetchTenDrinks.fetchDrinks(data.drinks);
    },
  }),
};

// export type RootState = StateType<typeof fetchTenDrinks>

export {fetchTenDrinks};
