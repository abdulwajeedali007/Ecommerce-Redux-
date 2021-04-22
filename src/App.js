import './App.scss';
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import Cart from './Components/Cart'
import Details from './Components/Details'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store'
function App() {
  return (
    <> 
    
     
     <Router>
        <Provider store = {store}>
            <Navbar/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/cart" component={Cart}/>
            <Route exact path="/details/:id" component={Details}/>
        </Provider>
     </Router>
       
    </>
  );
}

export default App;
