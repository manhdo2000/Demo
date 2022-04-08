import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/Counter';


function App() {
  return (
    <div className="App">
      <Counter />
      {/* <Counter add={100}/>
      <Counter add={-10}/> */}
    </div>
  );
}

export default App;
