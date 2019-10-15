import React, {Component} from 'react'
import logo from '../logo.svg';
import '../index.css';
//import '../App.css';

class Header extends Component {
    render(){
        return (
            <div className='Header'> 
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h3 className="App-title"> Big Fatia Pizzaria Delivery!</h3>
            </header>
            </div>
        );        
    }
}

export default Header