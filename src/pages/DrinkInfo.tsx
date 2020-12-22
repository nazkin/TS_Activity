import React, {useEffect, useState} from 'react';
import {RouteComponentProps} from 'react-router-dom';
import {Col, Row} from 'react-bootstrap';
import axios from 'axios';

import './page_styles/drinkInfo.css';
import * as apiRoutes from '../api/endpoints';
import * as interfaces from '../models/interfaces';
import {destructureCocktailIngredients} from '../helpers';

import Template from '../components/Template';
import IngredientsDisplay from '../components/subcomponents/IngredientsDisplay';
import LoadingSpinner from '../components/subcomponents/LoadingSpinner';

type DrinkDetailParams = {
  id: string;
};
type DrinkInfoProps = RouteComponentProps<DrinkDetailParams>;

const DrinkInfo: React.FC<DrinkInfoProps> = props => {
  const currentDrinkId: string = props.match.params.id;

  const [isLoading, setIsLoading] = useState(false);
  const [drinkInfo, setDrinkInfo] = useState<interfaces.drinkList>({
    name: '',
    img: '',
    description: '',
    ingredients: [],
    ingredientAmounts: [],
    instructions: '',
  });

  useEffect(() => {
    setIsLoading(true);
    axios({
      method: 'GET',
      url: `${apiRoutes.idLookup}`,
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_API,
        'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
        useQueryString: true,
      },
      params: {
        i: currentDrinkId,
      },
    })
      .then(({data}) => {
        const drinkObj: any = data.drinks[0];
        const currentDrinkData: interfaces.drinkList = destructureCocktailIngredients(
          drinkObj
        );
        setDrinkInfo(currentDrinkData);
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
      });
  }, [currentDrinkId]);

  const drinkImgUi = drinkInfo.img ? (
    <img className="drink-img" src={drinkInfo.img} alt="current drink" />
  ) : (
    <h1>Waiting on Image</h1>
  );
  const drinkTitleUi = drinkInfo.name ? (
    <span className="drink-title">
      <h1>{drinkInfo.name}</h1>
      <h4>{drinkInfo.description}</h4>
    </span>
  ) : (
    <span></span>
  );

  let ingredientsUi;
  if (drinkInfo.ingredients) {
    ingredientsUi = drinkInfo.ingredients.map((ing, index) => {
      const infoIng: string = ing.trim();
      let infoAmt: string;
      if (drinkInfo.ingredientAmounts === undefined) {
        infoAmt = '';
      } else {
        infoAmt = `${drinkInfo.ingredientAmounts[index].trim()}`;
      }
      return (
        <IngredientsDisplay
          displayTypeLarge={true}
          ingredient={infoIng}
          amount={infoAmt}
          key={index}
        />
      );
    });
  }

  return (
    <Template>
      {!isLoading ? (
        <Row className="mx-2 d-flex flex-row justify-content-evenly">
          {drinkTitleUi}
          <Col sm={7}>{drinkImgUi}</Col>
          <Col className="drink-ingredients-col" sm={5}>
            <h1>Ingredients</h1>
            {ingredientsUi ? ingredientsUi : null}
            <h1>Instructions</h1>
            <p>{drinkInfo.instructions}</p>
          </Col>
        </Row>
      ) : (
        <LoadingSpinner type="Puff" color="#541BD6" width={500} height={500} />
      )}
    </Template>
  );
};

export default DrinkInfo;
