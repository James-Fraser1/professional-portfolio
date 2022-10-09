import Nav from './components/Footer';
import Main from './components/Main';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';


function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Main></Main>
        <About></About>
        <Contact></Contact>
        <Projects></Projects>
      </main>
    </div>
  );
}

export default App;
