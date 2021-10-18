import './App.css';
import Navigation from './Pages/components/Navigation';
import Footer from './Pages/components/Footer';
import Home from "./Pages/Home";
import Women from "./Pages/Women"
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Electronics from './Pages/Electronics';
import Kids from './Pages/Kids';
import Men from './Pages/Men';




function App() {
  return (
    <Router>
    <div className="App">
      <Navigation />
      
      <div className="content">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/women" component={Women} />
          <Route path="/men" component={Men} />
          <Route path="/kids" component={Kids} />
          <Route path="/electronics" component={Electronics} />
        </Switch>
      </div>
    </div>
    <Footer />
    </Router>
  )
}


export default App;
