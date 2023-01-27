import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Shop from './Components/Shop';
import Contact from './Components/Contact';
import Definition from './Components/Definition';

function App() {
  return (
    <div className="wrapper">
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
      <Navbar/>
      <Home/>
      <Definition/>
      <About/>
      <Shop/>
      <Contact/>
    </div>
  );
}

export default App;
