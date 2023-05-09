import { Futer } from "./Companets/Futer";
import { Navbar } from "./Companets/Navbar";
import './style/style.css'

function App() {
  return (
    <div className="App">
      <div className="navbari">
        <Navbar />
      </div>
      <div className="fouter">
        <Futer />
      </div>
    </div>
  );
}

export default App;
