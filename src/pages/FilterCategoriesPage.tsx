import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Dispatch, iRootState} from '../store/store';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
const mapState = (state: iRootState) => ({
  tenCocktails: state.fetchTenDrinks.drinksData,
  recommendedCocktail: state.recommendedBeverage.recommendedDrink,
});
const mapDispatch = (dispatch: Dispatch) => ({
  fetchTenDrinks: () => dispatch.fetchTenDrinks.fetchDrinkList(),
  fetchRecommendedDrink: () => dispatch.recommendedBeverage.fetchRecommendedAsync(),
})

type StateProps = ReturnType<typeof mapState>
type DispatchProps = ReturnType<typeof mapDispatch>
type IFilterPageProps = StateProps & DispatchProps

const FilterPage: React.FC<IFilterPageProps> = (props) => {
  
  useEffect(()=> {
    props.fetchTenDrinks();
    props.fetchRecommendedDrink();
  },[])
  
  return (
    <div>
      <button onClick={() => {
        console.log(props.tenCocktails)
        console.log(props.recommendedCocktail)
      }}>Click</button>
      <h1>Why</h1>
    </div>
  );
};

export default connect(mapState, mapDispatch)(FilterPage);
