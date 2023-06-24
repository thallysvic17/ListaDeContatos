import Contatos from "./Components/Contatos"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Tabela from "./Components/ListaDeContatos"
import { Container } from "./styles/ContainerGlobal"

function App() {
  

  return (
    <>
      
      <Container>
        <Header/>
        <Tabela/>
        <Footer/>
      </Container>
    </>
  )
}

export default App
