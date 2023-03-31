import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
// import { Contacts } from "./components/Contacts";
import { Experiences } from './components/Experiences';
import { AboutMe } from './components/AboutMe';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <AboutMe />
      <Experiences />
      {/* <Contacts /> */}
      <Footer />
    </div>
  );
}

export default App;
