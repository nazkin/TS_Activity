import React from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import * as interfaces from "../models/interfaces";
import "./comp_styles/homeHero.css";

import IngredientsDisplay from "./subcomponents/IngredientsDisplay";
import CustomButton from "../components/subcomponents/ButtonCustom";

export interface IHeroProps {
    drinkList: Array<interfaces.drinkList>;
    recommended: interfaces.drinkList;
}
type strOrUndefined = string | undefined;

const Hero: React.FC<IHeroProps> = ({ drinkList, recommended }) => {
    let history = useHistory()

    const  viewDrinkHandler = (id: strOrUndefined) => {
      history.push(`/cocktail/${id}`);
    }

    const drinksUI = drinkList.map(drink => {
        return(
            <Carousel.Item onClick={() => viewDrinkHandler(drink.id)} key={drink.id} interval={3000}>
                <img
                    className="d-block w-100"
                    src={drink.img}
                    alt="First slide"
                />
                <Carousel.Caption className="carousel-text">
                   <h1>{drink.name}</h1>
                   <h4>{drink.description}</h4>
                </Carousel.Caption>
            </Carousel.Item>
        );
    });
    let ingredientsUI;
    if(!recommended.ingredients || !recommended.ingredientAmounts){
        ingredientsUI = null;
    }else {
        ingredientsUI = recommended.ingredients.map((ing, index) => {
            let infoIng:string = ing.trim();
            let infoAmt:string;
            if(recommended.ingredientAmounts === undefined){
                infoAmt = "";
            }else{
                infoAmt = ` ${recommended.ingredientAmounts[index].trim()}`;
            }  
            return (
                <IngredientsDisplay displayTypeLarge={false} ingredient={infoIng} amount={infoAmt} key={index}/>
            );
      
        });
    }
    return (
        <Row className="home-hero-container">
            <Col xs={12} className="home-hero">
                <span>
                    <h1>Explore Our Featured Cocktails</h1>
                </span>
            </Col>
            <Col md={6} className="mt-5 p-5">
                <Carousel controls={false} indicators={false} className="carousel-items">
                    {drinksUI}
                </Carousel>
            </Col>
            <Col md={6} className="home-random-drink mt-5">
                <Row className="recommended-row">
                    <Col className="recommended-desc" xs={6}>
                        <div>
                            <p>{recommended.description}</p>
                            <h2 onClick={() => viewDrinkHandler(recommended.id)}>{recommended.name}</h2>
                        </div>
                        <section>
                            {ingredientsUI}
                        </section> 
                    </Col>
                    <Col xs={6}>
                        <img src={recommended.img} alt="recommended cocktail" className="recommended-img" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className="justify-content-center">
                        <CustomButton>Find More Cocktails</CustomButton>
                    </Col>
                </Row>
            </Col>
        </Row>

    );
}

export default Hero;
