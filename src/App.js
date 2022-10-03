import logo from './logo.svg';
import './App.css';
import Home from './components/home.component';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Home name={'Anuroop'} />
      </header>
    </div>
  );
}

export default App;
