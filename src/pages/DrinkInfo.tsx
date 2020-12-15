import React from "react";
import { RouteComponentProps } from 'react-router-dom';
import Template from "../components/Template";

type DrinkDetailParams = {
    id: string; // parameters will always be a string (even if they are numerical)
  };
type DrinkInfoProps = RouteComponentProps<DrinkDetailParams>;


const DrinkInfo: React.FC<DrinkInfoProps> = (props) => {
    return (
        <Template>
            <h1>{props.match.params.id}</h1>
        </Template>
    );
}

export default DrinkInfo;