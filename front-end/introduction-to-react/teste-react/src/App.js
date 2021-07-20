import logo from './logo.svg';
import './App.css';

const sayMyName = (myName) => {
  return myName;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world!
        </p>
        <p>*fogo no parquinho* My name is {sayMyName('Xablau')}!!! *fogo no parquinho*</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
    </div>
  );
}

export default App;
