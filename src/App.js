import './App.css';
import Header from './header';
import AboutMe from './about-me';
import Portfolio from './portfolio';
import ContactInfo from './contact';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Portfolio />
      <ContactInfo />
      <Footer />
    </div>
  );
}

export default App;