import './App.css';
import Alterar from './components/Alterar';
import Contador from './components/Contador';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Contador/> 
        <Alterar/>
      </header>
    </div>
  );
}

export default App;