import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Headroom from 'react-headroom'
import Topbar from './Components/Topbar/Topbar';
function App() {
  return (
    <div className="App">
      <Headroom>
      <Navbar/>
      </Headroom>
      <Topbar/>
      
    </div>
  );
}

export default App;
