import './App.css';
import Navigation from './components/Navigation';
import Cover from './components/Cover';
import {Button} from 'react-bootstrap';
import Lists from "./components/Lists";
import Footer from './components/Footer';

<Button>Hello</Button>

function App() {
  return (
    <div className="App">
      <Navigation />
      <Lists /> 
      <Cover />
      <Lists /> 
      <Lists /> 
      <Footer />
    </div>
  )
}


export default App;
