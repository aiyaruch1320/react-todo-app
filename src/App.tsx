import "./App.css";
import { TodoList } from "./components/ItemList";
import { TextInput } from "./components/TextInput";
import { TodoWrapper } from "./context/todo.context";

function App() {
  return (
    <TodoWrapper>
      <>
        <div className="App">
          <h1>List your Task!</h1>
          <TextInput />
          <TodoList />
        </div>
      </>
    </TodoWrapper>
  );
}

export default App;
