import React, { useEffect, useState } from "react";
import axios from "axios";


import * as urls from "../api/endpoints";
import * as interfaces from "../models/interfaces";

import Hero from "../components/HomeHero";
import Template from "../components/Template";

export interface homeProps {};

const Home: React.FC<homeProps> = (props) => {
    
    const [drinks, setDrinks] = useState<Array<interfaces.drinkList>>([{
      id:"",
      name: "",
      img: "",
      description: "",
    }]);
    const [recommend, setRecommend] = useState<interfaces.drinkList>({
      id: "",
      name: "",
      img: "",
      description: "",
    });

    //Fetching 10 random cockatails for the home page
    useEffect(() => {
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
            setDrinks(arr);
            console.log(res);
        }).catch(err => console.log(err));
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
        const ingArr:Array<string> = [];
        const amountArr:Array<string> = [];

        for(let i:number = 0; i < 15; i++) {
          let ithIngredient= `strIngredient${i+1}`;
          let ithAmount = `strMeasure${i+1}`;

          if(recommendedDrink[ithIngredient] !== null) {
            ingArr.push(recommendedDrink[ithIngredient])
          }

          if(!recommendedDrink[ithAmount] && recommendedDrink[ithIngredient]){
            amountArr.push("to your taste");
          }else if(recommendedDrink[ithAmount] && recommendedDrink[ithIngredient]){
            amountArr.push(recommendedDrink[ithAmount]);
          }
 
        }

        let obj: interfaces.drinkList = {
          id: recommendedDrink.idDrink,
          name: recommendedDrink.strDrink,
          img: recommendedDrink.strDrinkThumb,
          description: recommendedDrink.strAlcoholic + " " + recommendedDrink.strCategory,
          ingredients: ingArr,
          ingredientAmounts: amountArr,
        };
        //Filtering for ingredients
        setRecommend(obj);
      }).catch(err => console.log(err));
    },[setRecommend]);


    return (
        <Template>
            <Hero recommended={recommend} drinkList={drinks}/>
        </Template>
    );
}

export default Home;

