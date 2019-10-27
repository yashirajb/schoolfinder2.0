import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import SchoolCard from './SchoolCard/SchoolCard';


function CardContainer(props){
    const schoolcards = props.schools.map(function(school){
        return(
            <Col sm="4">
                <SchoolCard school={school} />
            </Col>
        )
    })

    return(
        <Container fluid>
            <Row>
                {schoolcards}
            </Row>
        </Container>
    )
}

export default CardContainer; 