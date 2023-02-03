import './App.css';
import { Navbar } from './pages/Navbar';
import { Hero } from './pages/Hero';
import { Tokenomics } from './pages/Tokenomics';
import { Roadmap } from './pages/Roadmap';
import { Volti } from './pages/Volti';
function App() {
  return (
    <div>
      <div className="App-Nav-Hero">
        <Navbar/>
        <Hero/>
      </div>

      <div className="Volti">
        <Volti/>
      </div>

      <div className="Tokenomics">
        <Tokenomics/>
      </div>      

      <div className="Roadmap">
        <Roadmap/>
      </div>
    </div>

  );
}

export default App;
