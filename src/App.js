import { useState } from 'react';
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
import ContactForm from './components/ui/contactForm';

const App = () => {
  const [modal, setModal] = useState('');
  
  const openModal = () => {
    setModal('active');
  }

  const closeModal = () => {
    setModal('');
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Nav callback={openModal}/>
        <Routes>
          <Route path="/" element={<Header/>}/>
        </Routes>
        <Routes>
          <Route path="*" element={<NotFound />}/>
          <Route exact path="/" element={<MainScreen callback={openModal}/>} />
          <Route exact path="/projects" element={<Projects callback={openModal}/>} />
          <Route path="about" element={<About callback={openModal}/>} />
          <Route path="contact" element={<Contacts callback={openModal}/>} />
        </Routes>
        <Footer/>
        <ContactForm callback={closeModal} active={modal}/>
      </div>
    </BrowserRouter>
  )
}

export default App;