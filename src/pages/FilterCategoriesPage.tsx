import React, { useEffect, useState } from "react";
import './filterCategory.css';
import { Col, Row } from "react-bootstrap";

import Template from "../components/Template";


export interface IFilterCategoryProps {

};

const FilterCategory: React.FC<IFilterCategoryProps> = (props) => {
    // so first we will loop throght categories and then search all the possible drinks
    // each column will be a card dynamic
    return (
        <Template>
            <Row>
                <div className="category-title">
                    <h1>Title</h1>
                </div>
            </Row>
        </Template>

    );
}

export default FilterCategory;