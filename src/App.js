import './App.scss';
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import Cart from './Components/Cart'
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <> 
    
     
     <Router>
      <Navbar/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/cart" component={Cart}/>
     </Router>
       
    </>
  );
}

export default App;
