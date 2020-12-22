import React from "react";
import { Col, Row } from "react-bootstrap";

import "./comp_styles/categorySpecific.css";


export interface ICategoryListProps {
    category: string;
};

const CategoryList: React.FC<ICategoryListProps> = ({ category }) => {

    return (
        <Row className="my-3" key={category}>
            <Col xs={12}>
                <div className="categoryFilter-title">
                    <h1>{category.toUpperCase()}</h1>
                </div>
            </Col>
            <Col xs={12}>

            </Col>
        </Row>
    );
}

export default CategoryList;