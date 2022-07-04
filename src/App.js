import './App.css';
import Main from './components/Main/Main';
import { useDispatch } from 'react-redux';
import { addTasksLocalStorage } from './redux/action';

function App() {

  const dispatch = useDispatch();

  const tasks = JSON.parse(localStorage.getItem("task"));

  dispatch(addTasksLocalStorage(tasks));

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
