
import { useState } from 'react';
import './App.css';
import Counter from './Components/counter';
import AllRoutes from './pages/AllRoutes';

function App() {


  const [toggle, setToggle] = useState(false)
  return (
    <div className="App">
      {toggle && <Counter />}
      <button onClick={()=> setToggle((prev)=> !prev)}>Toggle Counter</button>
      <AllRoutes />
    </div>
  );
}

export default App;
