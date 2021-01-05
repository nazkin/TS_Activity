import React from 'react';
import {connect} from 'react-redux';
import {Dispatch, iRootState} from '../store/store';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IFilterPageProps {}

const FilterPage: React.FC<IFilterPageProps> = props => {
  return (
    <div>
      <h1>Why</h1>
    </div>
  );
};

const mapState = (state: iRootState) => ({
  drinksData: state.fetchTenDrinks,
});

export default connect(mapState)(FilterPage);
