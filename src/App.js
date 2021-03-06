import React from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import BusinessList from './components/BusinessList/BusinessList';

const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

const businesses = [
   business,
   business,
   business,
   business,
   business,
   business
];

class App extends React.Component {
  searchYelp( term, location, sortBy ) {
    console.log(`you are searching for ${term}, in ${location}, and ${sortBy}`);
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={businesses}/>
      </div>
    );
  }
}

export default App;
