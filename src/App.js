// import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import Buttons from './components/Buttons';
import Cards from './components/Cards';
import Menu from './components/Menu';
import transactions from './transactions.json';
import cards from './cards.json';
import Transactions from './components/Transactions';

function App() {
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
      <Cards {...cards}/>
      <Buttons />
      <Transactions {...transactions}/>
      <Menu />
    </div>
  );
}

export default App;
