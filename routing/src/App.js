import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Shop from './components/Shop';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ItemDetail from './ItemDetail';
function App() {
  return (
    <div className="App">
      <Router>
      <Nav />
      <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={About} />
      <Route path="/shop" exact component={Shop} />
      <Route path="/shop/:id" component={ItemDetail} />
      </Switch>
      </Router>
    </div>
  );
}

const HomePage = () => (
   <div><h2>HomePage</h2></div>
)
export default App;
