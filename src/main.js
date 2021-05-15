import React, {Component} from 'react';
import './main.css';
import logo2 from './logo2.svg';
import back from './back.svg';
import things from './things.svg';


class main extends Component {
    render() {
        return (
         
      <div className="Main">
          <img src={back} className="Main-back" alt="logo" />
      <img src={logo2} className="App-logo2" alt="eda" />
        <header className="Main-header">
        <img src={things} className="App-things" alt="eda" />
         
          </header>
          
          </div>
          );
}

}

export default main;
