import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Headroom from 'react-headroom'
import Topbar from './Components/Topbar/Topbar';
import Slides from './Components/Slides/Slides';
import Cards from './Components/Cards/Cards';
import Transistions from './Components/Transistions/Transistions';
import Animations from './Components/Animations/Animations';
import Newsbanners from './Components/Newsbanners/Newsbanners';
import Map from './Components/Map/Map';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Headroom>
      <Navbar/>
      </Headroom>
      <Topbar/>
      <Slides/>
      <Cards/>
      <Transistions/>
      <Animations/>
      <Newsbanners/>
      <Map/>
      <Footer/>
    </div>
  );
}

export default App;
