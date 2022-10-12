// import Courses ,Title and UserCard here
// keep a user object with mentioned properties and pass down to UserCard as prop
import "./styles.css";
import Title from "./Components/Title";
import UserCard from "./Components/UserCard";
// import { Button } from "./Components/UserCard";
import Courses from "./Components/Courses";


export default function App() {
  return (
    <div className="App">
      <Title title="Users Display"/>

      <UserCard 
      avatar=""
      name={"Chirsse"}
      address={"4018 sach trails"}
      posts={"1841"}
      followers={"66868"}
      />
      {/* <Button /> */}
      <Courses
      
      />

    </div>
  );
}
