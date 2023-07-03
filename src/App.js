import './App.css';
import MainScreen from './pages/MainScreen/mainScreen';
import { Footer } from './components/footer/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Contacts } from './components/contacts/contacts';
import { Header } from './components/header/header';
import { Nav } from './components/ui/nav/nav';
import { NotFound } from './components/notFound/notFound';
import { Projects } from './pages/projects/projects';
import { About } from './pages/about/about';



const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Header/>}/>
        </Routes>
        <Routes>
          <Route path="*" element={<NotFound />}/>
          <Route exact path="/" element={<MainScreen/>} />
          <Route exact path="/projects" element={<Projects/>} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contacts/>} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App;