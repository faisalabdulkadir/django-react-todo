import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <header>Todo App</header>
        <div class="inputField">
          <input type="text" placeholder="Add your new todo" />
          <button><i class="fas fa-plus"></i></button>
        </div>
        <ul class="todoList">
          {/* <!-- data are comes from local storage --> */}
        </ul>
        <div class="footer">
          <span>You have <span class="pendingTasks"></span> pending tasks</span>
          <button>Clear All</button>
        </div>
      </div>

    </div>
  );
}

export default App;
