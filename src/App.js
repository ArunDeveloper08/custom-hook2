import logo from './logo.svg';
import './App.css';
import Home from './components/Home';

function App() {
  const numberOptions = Array.from({ length: 50 });
  return (
    <div className="App">
  {
    numberOptions.map((item)=>(
      <Home/>
    ))
  }
    </div>
  );
}

export default App;
