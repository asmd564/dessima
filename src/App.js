import { useState } from 'react';
import './App.css';
import { CardList } from './components/cardlist';
import cn from 'classnames';
import MainScreen from './components/MainScreen/mainScreen';
import { Footer } from './components/footer/footer';

import products from './api/products.json';



const App = () => {
  return (
    <div ClassName="App">
       <MainScreen/>
      <Footer/>
    </div>
  )
}

export default App;