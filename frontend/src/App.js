import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import LoginBox from './Components/LoginBox'
import Players from './Components/Players'

function App() {
  function openAboutUs(){
    console.log('About us clicked.');
  }
  return (
    <div className="App">
      <button>
        Home
      </button>
      
      <button>
        Teams
      </button>
      <button>
        Schedules
      </button>
      <button>
        Points Table
      </button>
      <button>
        Apply
      </button>
      <button>
        Rules
      </button>
      <button>
        Sponsors
      </button>
      <button onClick={openAboutUs}>
        About Us
      </button>

      <Greet></Greet>
      <LoginBox></LoginBox>
      <Players></Players>

    </div>
  );
}

export default App;
