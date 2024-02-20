import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Headroom from 'react-headroom'
import Topbar from './Components/Topbar/Topbar';
import Slides from './Components/Slides/Slides';
import Cards from './Components/Cards/Cards';
import Transistions from './Components/Transistions/Transistions';

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
    </div>
  );
}

export default App;
