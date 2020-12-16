import React, { useEffect } from "react";
import { RouteComponentProps } from 'react-router-dom';
import axios  from "axios";

import * as apiRoutes from "../api/endpoints";

import Template from "../components/Template";


type DrinkDetailParams = {
    id: string; // parameters will always be a string (even if they are numerical)
  };
type DrinkInfoProps = RouteComponentProps<DrinkDetailParams>;


const DrinkInfo: React.FC<DrinkInfoProps> = (props) => {

    const currentDrinkId:string = props.match.params.id;

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
                iid:currentDrinkId
            }

        }).then(res => {
            console.log(res);
        }).catch(err => console.log(err))
    },[currentDrinkId])
    return (
        <Template>
            <h1>{props.match.params.id}</h1>
        </Template>
    );
}

export default DrinkInfo;