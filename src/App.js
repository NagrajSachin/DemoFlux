import './App.css';
import Todos from './components/todos';

function App() {
  return (
    <div className="App">
      <h1 className='display-1 text-center text-danger'>
        Welcome to Flux!
      </h1>
      <Todos />
    </div>
  );
}

export default App;
