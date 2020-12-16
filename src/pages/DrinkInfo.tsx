import React, { useEffect, useState } from "react";
import { RouteComponentProps } from 'react-router-dom';
import { Col, Row } from "react-bootstrap";
import axios  from "axios";

import './page_styles/drinkInfo.css';
import * as apiRoutes from "../api/endpoints";
import * as interfaces from "../models/interfaces";
import { destructureCocktailIngredients } from '../helpers';

import Template from "../components/Template";


type DrinkDetailParams = {
    id: string; 
  };
type DrinkInfoProps = RouteComponentProps<DrinkDetailParams>;


const DrinkInfo: React.FC<DrinkInfoProps> = (props) => {
    
    const currentDrinkId:string = props.match.params.id;
    
    const [drinkInfo, setDrinkInfo] = useState<interfaces.drinkList>({
        name: "",
        img: "",
        description: "",
        ingredients: [],
        ingredientAmounts: [],
        instructions: "",
    });

    useEffect(() => {
        axios({
            method: "GET",
            url: `${apiRoutes.idLookup}`,
            headers:{
                "x-rapidapi-key": process.env.REACT_APP_API,
                "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                "useQueryString": true
            },
            params: {
                i:currentDrinkId
            }

        }).then(({ data }) => {
            const drinkObj = data.drinks[0];
            const currentDrinkData = destructureCocktailIngredients(drinkObj);
            setDrinkInfo(currentDrinkData);
        }).catch(err => console.log(err));
    },[currentDrinkId]);

    let drinkImgUi = drinkInfo.img ? <img className="drink-img" src={drinkInfo.img} alt="current drink" /> : <h1>Waiting on Image</h1>;
    let drinkTitleUi = drinkInfo.name ? <span className="drink-title">
                                            <h1>{drinkInfo.name}</h1>
                                            <h4>{drinkInfo.description}</h4>
                                        </span> : <span></span>;

    let ingredientsUi;
    if(drinkInfo.ingredients) {
        ingredientsUi = drinkInfo.ingredients.map((ing, index) => {
            let infoIng:string = ing.trim();
            let infoAmt:string;
            if(drinkInfo.ingredientAmounts === undefined){
                infoAmt = "";
            }else{
                infoAmt = `${drinkInfo.ingredientAmounts[index].trim()}`;
            }  
            return (
                <div className="ing-div" key={`${ing}${index}`}>
                    <section>
                        <h4>{infoIng}</h4>
                    </section>
                    <section>
                        <h4>{infoAmt}</h4>
                    </section> 
                </div>
            );
        });
    }

    return (
        <Template>
            <Row className="mx-2 d-flex flex-row justify-content-evenly">
                {drinkTitleUi}
                <Col sm={7}>
                    {drinkImgUi}
                </Col>
                <Col className="drink-ingredients-col" sm={5}>
                    <h1>Ingredients</h1>
                    {ingredientsUi ? ingredientsUi : null}
                    <h1>Instructions</h1>
                    <p>{drinkInfo.instructions}</p>
                </Col>
            </Row> 
        </Template>
    );
}

export default DrinkInfo;