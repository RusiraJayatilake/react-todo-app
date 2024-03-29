import './App.css';
import AddTodos from './components/addTodo';
import store from './components/Redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <AddTodos />
    </Provider>
  );
}

export default App;
