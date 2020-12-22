import React from 'react';
import './ingredientDisplay.css';

export interface IIngUIProps {
  displayTypeLarge: boolean;
  key: number | string;
  ingredient: string;
  amount: string;
}

const IngUI: React.FC<IIngUIProps> = props => {
  const {displayTypeLarge, key, ingredient, amount} = props;

  if (displayTypeLarge) {
    return (
      <div className="ing-div" key={key}>
        <section>
          <h4>{ingredient}</h4>
        </section>
        <section>
          <h4>{amount}</h4>
        </section>
      </div>
    );
  } else {
    return (
      <div key={key} className="ingredient-list-text">
        <span>
          <h4>{ingredient}</h4>
        </span>
        <span>
          <h4>{amount}</h4>
        </span>
      </div>
    );
  }
};

export default IngUI;
