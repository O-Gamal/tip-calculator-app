import './App.css';
import CalculatorBody from './components/CalculatorBody';
import Logo from './components/Logo';

function App() {
  return (
    <main className='App'>
      <header className='logo-container'>
        <Logo />
      </header>
      <CalculatorBody />
    </main>
  );
}

export default App;
