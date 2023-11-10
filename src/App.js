import './assets/css/App.css';
import Buttons from './components/Buttons';
import Cards from './components/Cards';
import Menu from './components/Menu';
import transactions from './transactions.json';
import cards from './cards.json';
import Transactions from './components/Transactions';

function App() {
  return (
    <main className='App'>
      <Menu />
      <Cards {...cards}/>
      <Buttons />
      <Transactions {...transactions}/>
    </main>
  );
}

export default App;
