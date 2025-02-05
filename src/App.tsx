import EstiloGlobal, { Container } from "./styles";
import SideBar from "./containers/SideBar";
import About from "./containers/About";
import Projects from "./containers/Projects";
function App() {
  return (
    <>
      <EstiloGlobal/>
      <Container>
        <SideBar/>
        <main>
          <About/>
          <Projects/>
        </main>
      </Container>
    </>
  );
}

export default App;
