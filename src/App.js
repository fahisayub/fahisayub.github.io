import { Container } from "@chakra-ui/react";
import "./App.css";
import FooterContact from "./components/FooterContact";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <Container maxW='100%' minH='100vh' margin='0px'textAlign='center'bg='gray.900' padding='0px' overflow='hidden' >
      <Navbar />
      <Home />
<FooterContact/>
    </Container>
  );
}

export default App;
