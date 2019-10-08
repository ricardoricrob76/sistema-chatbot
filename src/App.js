import React, { Component } from 'react';
import './index.css';
// import './App.css';

// Importando novas Bibliotecas dos Componentes de Tela..
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import Home   from './Componentes/Home';
import Chatbot from './Componentes/Chatbot';

class App extends Component {
  render() {
    return (
      <div className="conteudo">
      
        <Header />   
        <Home />
        <Chatbot />       
        <Footer />
      
      </div>

    );
  }
}

export default App;
