import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [section, setSection] = useState('about');

  return (
    <div>
      <Header setPage={setSection}></Header>
      <Main page={section}/>
      <Footer></Footer>
    </div>

  );
}

export default App;
