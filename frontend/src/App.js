import logo from './logo.svg';
import './App.css';

function App() {
  function openAboutUs(){
    console.log('About us clicked.');
  }
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
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

    </div>
  );
}

export default App;
