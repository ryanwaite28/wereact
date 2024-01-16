import './App.css';
import './header.css'
import Header from "./Header"
import Home from "./Home"
import Checkout from "./Checkout"
import Login from "./Login"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"



function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/login">
          <Login/>
        </Route>

        <Route path="/checkout">
          <Checkout/>
        </Route>

        <Route path="/">
          <Home/>
        </Route>


      </Routes>
      </Router>

      <Header /> 
      <Home />
    </div>
  );
}

export default App;
