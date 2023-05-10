import './App.css';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Strength } from './components/strength/strength';

const App = () => {
  return (
  <div className="App">
    <Header/>
    <Strength/>
    <Footer/>
  </div>
);
}

export default App;