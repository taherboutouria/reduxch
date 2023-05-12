import 'bootstrap/dist/css/bootstrap.min.css';
import TodoLists from './Components/TodoLists';
import Addtask from './Components/Addtask';
import Filtred from './Components/Filtre';

function App() {
  return (
    <div className="App">
      <Addtask/>
      <TodoLists/>
      <Filtred/>
    
    </div>
  );
}

export default App;
