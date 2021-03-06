import React from 'react';
import './App.css';
import Order from './components/Order';

class App extends React.Component {
  render() {
    const headphone = {
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    };

    const energyDrink = {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    };

    return (
      <div className="App">
        <h1> Orders recently created </h1>
         <Order order={headphone} />
         <Order order={energyDrink} />
      </div>
    );
  }
}

export default App;

// O que o componente App é em relação a Order? R: Componente pai

// Complete o código acima de forma que os pedidos referentes aos produtos headphone e energyDrink sejam filhos de App .