import React, { useEffect, useState } from "react";
import Loader from 'react-loader-spinner';
import axios from "axios";


import * as urls from "../api/endpoints";
import * as interfaces from "../models/interfaces";
import { destructureCocktailIngredients } from '../helpers';

import Hero from "../components/HomeHero";
import Template from "../components/Template";
import LoadingSpinner from "../components/subcomponents/LoadingSpinner"

export interface homeProps {};

const Home: React.FC<homeProps> = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [drinks, setDrinks] = useState<Array<interfaces.drinkList>>([{
      id:"",
      name: "",
      img: "",
      description: "",
    }]);
    const [recommend, setRecommend] = useState<interfaces.drinkList>({
      id:"",
      name: "",
      img: "",
      description: "",
      ingredients: [],
      ingredientAmounts: [],
      instructions: "",
    });

    //Fetching 10 random cockatails for the home page
    useEffect(() => {
        setIsLoading(true);

        axios({
          method: "GET",
          url: urls.tenCocktailsUrl,
          headers: {
            "x-rapidapi-key": process.env.REACT_APP_API,
            "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
            "useQueryString": true
          }
        }).then(res => {
            const arr = res.data.drinks.map((drink: any) => {
              let obj: interfaces.drinkList = {
                id: drink.idDrink,
                name: drink.strDrink,
                img: drink.strDrinkThumb,
                description: drink.strAlcoholic + " " + drink.strCategory,
              }
              return obj;
            });
            setIsLoading(false);
            setDrinks(arr);
        }).catch(err =>{
            setIsLoading(false);
            //Error handling
            console.log(err);
        });
      }, [setDrinks]);
    
    //Fetching 1 random recipe
    useEffect(() => {
      axios({
        method: "GET",
        url: urls.randomCocktailUrl,
        headers: {
          "x-rapidapi-key": process.env.REACT_APP_API,
          "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
          "useQueryString": true
        }
      }).then(res => {
        console.log(res.data);
        const recommendedDrink = res.data.drinks[0];
        const drinkData = destructureCocktailIngredients(recommendedDrink);
        setRecommend(drinkData);
      }).catch(err => console.log(err));
    },[setRecommend]);

    let heroUi = (recommend === undefined || drinks === undefined) ?
                   (<div/>) : (<Hero 
                                  recommended={recommend} 
                                  drinkList={drinks}
                                />);
    let loadingSpinner = <LoadingSpinner type="Puff" color="#541BD6" width={500} height={500}/> ;
    return( 
        <Template>
            {isLoading ? loadingSpinner : heroUi}
        </Template>
    );
}

export default Home;

