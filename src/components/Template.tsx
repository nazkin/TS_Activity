import React from "react";
import Header from "./Header";
import { withRouter } from "react-router-dom";
import { Container } from "react-bootstrap";

export interface ITemplateProps {
    children?: React.ReactNode
};

const Template: React.FC<ITemplateProps> = (props) => {
    return (
        <Container>
            <Header />
            <footer>
                {props.children}
                <p>************************************************************************************</p>
            </footer>
        </Container>
    );
}

export default Template;