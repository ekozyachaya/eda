import logo from './logo.svg';
import eda from './edeteda.svg';
import './App.css';
import {Route, HashRouter, NavLink} from 'react-router-dom'
import main from './main';
import React, {Component} from 'react';


class App extends Component {
  render() {
      return (
        <HashRouter> 
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <img src={eda} className="App-eda" alt="eda" />
      <nav>
        <div class="menu">
                  <ul>
                     <li><a href="#">О НАС</a></li>
                     <li><a href="#">КОНТАКИЫ</a></li>
                  </ul>
               </div>
               </nav>
      </header>
      <NavLink to="/main" className="App-text" >ЗАКАЗАТЬ</NavLink>
    </div>
 <div className="content">
 <Route path="/main" component={main} /></div>
 </HashRouter>  
   
   );
}

}

export default App;
