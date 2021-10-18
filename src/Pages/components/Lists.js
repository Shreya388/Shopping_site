import React from "react";
import {Container, Card, Col, Row} from 'react-bootstrap';


var itemLists = ["Men", "Women", "Kids", "Electronics", "Groceries", "Offers"];   
const item = itemLists.map((itemList)=>{   
    return (
        
        <Col xs={2}>
            <Card>{itemList}</Card>
        </Col>
    
        );   
});   
  
                                                                                                                                                                                                                                                        
function Lists(){
    return (

        
        <div className="cover" style={{ paddingTop:"50pt", paddingBottom: "50pt", background: "#f1f1f1"}}>
            <Container>
            <Col xs={12}>
                <Row>
                    {item}
                </Row>
            </Col>
            </Container>
        </div>


    )
}

export default Lists;