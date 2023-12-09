import './App.css';
import Animalfeed from './Components/Animalfeed/Animalfeed';
import Categories from './Components/Categories/Categories';
import Herosection from './Components/HeroSection/Herosection';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Herosection />
      <Categories />
      {/* <Animalfeed /> */}
    </div>
  );
}

export default App;
