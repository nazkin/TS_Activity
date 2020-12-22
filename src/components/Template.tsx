import React from "react";
import Header from "./Header";
import { Container } from "react-bootstrap";

export interface ITemplateProps {
    children?: React.ReactNode
};

const Template: React.FC<ITemplateProps> = (props) => {
    return (
        <Container>
            <Header />
                {props.children}
            <footer>
                
                <p>************************************************************************************</p>
            </footer>
        </Container>
    );
}

export default Template;