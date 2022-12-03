import "./App.css";
import{ ThemeProvider } from "styled-components"
import useDarkMode from "./hooks/useDarkMode";
import UserCard from "./Components/UserCard";
import Input from "./Components/Input";



function App() {

  const { isDarkMode, setDarkMode } = useDarkMode()
  //import the useDark mode hook here
  const toggleDarkMode=()=>{
    setDarkMode(true);
  }
  return (
    // add the dark-mode class name along with App depending on the boolean value of isDarkMode
    <div data-testid="app-component" className="App">

      {/* to toggle the darkMode value of the application */}
      {/* Default value: Dark.  */}
      <button onClick={toggleDarkMode} value="Dark">

      </button>
      <UserCard />
      {/* use the UserCard component here */}

      <br />
      <Input />
      {/* use the Input component here */}

      <div data-testid="input-value">Input value is</div>

    </div>
  );
}

export default App;

/*
imageURL for testing;
1. https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=1400&q=60
2. https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60
*/
