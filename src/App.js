import { Container } from "@chakra-ui/react";
import "./App.css";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <Container maxW='100%'margin='0px'textAlign='center' padding='0px' >
      <Navbar />
      <Home />
      <Contacts/>

    </Container>
  );
}

export default App;
