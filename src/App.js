import "./App.css";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App" >
      <Navbar />
      <Home />
      <Contacts/>

    </div>
  );
}

export default App;
