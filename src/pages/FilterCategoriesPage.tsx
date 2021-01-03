import React from 'react';
import {connect} from 'react-redux';
import {TenDrinksState} from '../store/types';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IFilterPageProps {}

const FilterPage: React.FC<IFilterPageProps> = props => {
  return (
    <div>
      <h1>Why</h1>
    </div>
  );
};

const mapState = state => ({
  tenDrinks: state.fetchTenDrinks,
});
const mapDispatch = () => ({});

export default connect(mapState, mapDispatch)(FilterPage);
