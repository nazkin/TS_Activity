import React from "react";
import { Carousel, Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom"
import * as interfaces from "../models/interfaces";
import "./comp_styles/homeHero.css";


export interface IHeroProps {
    drinkList: Array<interfaces.drinkList>;
    recommended: interfaces.drinkList;
}

const Hero: React.FC<IHeroProps> = ({ drinkList, recommended }) => {
    let history = useHistory()




    const  viewDrinkHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      
    }

    const drinksUI = drinkList.map(drink => {
        return(
            <Carousel.Item key={drink.img} interval={3000}>
                <img
                    className="d-block w-100"
                    src={drink.img}
                    alt="First slide"
                />
                <Carousel.Caption className="carousel-text">
                   <h1>{drink.name}</h1>
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
                infoAmt = ` - ${recommended.ingredientAmounts[index].trim()}`;
            }  
            return (
                <div className="ingredient-list-text">
                    <span>
                        <h4>{infoIng}</h4>
                    </span>
                    <span>
                        <h4>{infoAmt}</h4>
                    </span> 
                </div>
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
            <Col xs={6} className="mt-5 p-5">
                <Carousel className="carousel-items">
                    {drinksUI}
                </Carousel>
            </Col>
            <Col xs={6} className="home-random-drink mt-5">
                <Row className="recommended-row">
                    <Col className="recommended-desc" xs={6}>
                        <div>
                            <p>{recommended.description}</p>
                            <h2>{recommended.name}</h2>
                        </div>
                        <button>go</button>
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
                        <div className="cont">
                            <button className="btn-pill">
                                <span>Find More Cocktails</span>
                            </button>
                        </div>

                    </Col>
                </Row>
            </Col>
        </Row>

    );
}

export default Hero;