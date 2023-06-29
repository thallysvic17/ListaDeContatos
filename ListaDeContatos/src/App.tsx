
import { Provider } from 'react-redux'
import store from './Store'
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Cadastro from "./Pages/CadastroContatos"
import Home from "./Pages/Home"
import { Container } from "./styles/ContainerGlobal"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

function App() {
  //aqui estou criando uma rota usando o react-router 
  const rotes = createBrowserRouter([
    {
      path:'/',
      element: <Home/> //basicamente criamos um path(caminho) e o elemento que sera renderizado
    },
    {
      path: '/novo',
      element: <Cadastro/>

    }
  ])

  return (
    <Provider store={store}>
      <Container>
        <Header/>
        <RouterProvider router={rotes}/>  
        <Footer/>
      </Container>
    </Provider>
  )
}

export default App
