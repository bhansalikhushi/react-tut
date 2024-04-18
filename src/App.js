import "./App.css";
import NavBar from "./components/NavBar";
import HomeBody from "./components/HomeBody";
import UserData from "./components/UserData";
function App() {
  return (
    <>
      <NavBar />
      <UserData user="Khushi Bhansali" age="22" />
      <HomeBody />
    </>
  );
}

export default App;
