import Header from "../../components/header"
import Home from "../../components/home"
import Inicio from "../../components/inicio"
import Agua from "../../components/agua"
import Fogo from "../../components/fogo"
import Planta from "../../components/planta"

export default function Page() {
  return (
    <div>
      <Header />
      <Home />
      <Inicio />
      <Agua />
      <Planta />
      <Fogo />
      
      <h1>
        Olá, mundo!!!
      </h1>
    </div>
  )
}