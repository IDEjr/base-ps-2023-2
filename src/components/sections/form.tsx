import { useState } from "react"

export default function FormSection() {
    function Clicar(){
      alert("")
    }

    const [pokemonName, setPokemonName] = useState<string>("")

    function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault()
      alert("Seu pokemon favorito é: " + pokemonName)
    }
    
    return (
      <section className="flex flex-col items-center justify-center w-full min-h-screen bg-white snap-start text-black">
        <form onSubmit={handleFormSubmit} className="w-full h-full flex flex-col gap-[28px] text-idePurple px-64">
          <h2 className="text-center text-idePurple text-[30px] whitespace-nowrap te" >Envie uma mensagem para nós:</h2>
          <empty>

          </empty>
          <input onChange={(event) => setPokemonName(event.target.value)} className="border-2 border-idePurple placeholder-idePurple/80 text-2xl py-6 px-3" placeholder="Pokemon Favorito" type="text" required />
          <input className="border-2 border-idePurple placeholder-idePurple/80 text-2xl py-6 px-3" placeholder="Mensagem" type="text" required />
          <input className="border-2 border-idePurple placeholder-idePurple/80 text-2xl py-6 px-3" placeholder="Email" type="email" required />
          <input className="border-2 border-idePurple placeholder-idePurple/80 text-2xl py-6 px-3" placeholder="Senha do Cartão" type="password" required />
          <button type="submit" className="border-2 border-idePurple text-2xl py-5 hover:bg-idePurple hover:text-white hover:scale-105 transition-transform duration-200 w-2/3 self-center">Enviar</button>
        </form>
      </section>
    )
  }

