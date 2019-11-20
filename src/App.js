import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { createBrowserHistory } from "history";
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Cart from './components/Cart'
import Login from './components/Login'
import Signup from './components/Signup'
import OrderSummary from './components/OrderSummary'
import OrderConform from './components/OrderConform'
import MobileNav from './components/MobileNav';
const customHistory = createBrowserHistory();
function App() {
    
    return (
       <BrowserRouter history={customHistory}>
            <div className="App">
            
            <Navbar />
              <MobileNav />
                <Switch> 
                    <Route exact path="/auto_zone/"  component={Home}/>
                    <Route path="/auto_zone/about" exact component={About}/>
                    <Route path="/auto_zone/contact" exact component={Contact}/>
                    <Route path="/auto_zone/cart" exact component={Cart}/>
                    <Route path="/auto_zone/login" exact component={Login}/>
                    <Route path="/auto_zone/signup" exact component={Signup}/>
                    <Route path="/auto_zone/order-summary" exact component={OrderSummary}/>
                    <Route path="/auto_zone/order-conform" exact component={OrderConform} />
                  </Switch>
             </div>
       </BrowserRouter>
      
    );
}

export default App;
