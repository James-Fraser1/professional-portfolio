import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const [section, setSection] = useState('contact');

  return (
    <div className='background'>
      <Router>
      <Header/>
        <Routes>
          <Route path='/about' element={ <About/> } />
          <Route path='/contact' element={ <Contact/> } />
          <Route path='/projects' element={ <Projects/> } />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;