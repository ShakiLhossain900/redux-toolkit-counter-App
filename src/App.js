import './App.css';
import CounterView from './features/counter/CounterView';

function App() {
  return (
    <div className="App">
     <h1>counter app using redux toolkit</h1>    
     <CounterView/>
    </div>
  );
}

export default App;



//redux y counter slice means collection of logic 1. increment 2. decrement this kind of logic  