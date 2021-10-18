import React from "react";
import { Container } from "react-bootstrap";
import Cover from './components/Cover';
import Lists from "./components/Lists";

const Home = () => {
    return ( 
        <div>
        <Container>
            <h1>Home</h1>
            
        </Container>
        <Lists /> 
        <Cover />
        

        </div>
     );
}
 
export default Home;