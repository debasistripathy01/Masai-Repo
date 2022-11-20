import "./App.css";
import Counter from "./Components/Counter";
// import { store } from "./Redux/store";

function App() {

  // const store = store.getState();
  // const {counter} = store.getState()

  // console.log(store.getState());
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
