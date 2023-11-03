import { useState } from 'react'

export default function FormSection() {
  const [pokemonName, setPokemonName] = useState<string>('')

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    alert('Seu pokemon favorito é: ' + pokemonName)
  }

  return (
    <section
      id='form'
      className='flex min-h-screen w-full snap-start flex-col items-center justify-center bg-white text-black'
    >
      <form
        onSubmit={handleFormSubmit}
        className='flex h-full w-full flex-col gap-[28px] px-64 text-idePurple'
      >
        <h2 className='whitespace-nowrap text-center text-4xl tracking-tighter text-idePurple'>
          Envie uma mensagem para nós:
        </h2>
        <input
          onChange={(event) => setPokemonName(event.target.value)}
          className='border-2 border-idePurple px-3 py-6 text-lg placeholder-idePurple/80'
          placeholder='Pokemon Favorito'
          type='text'
          required
        />
        <input
          className='border-2 border-idePurple px-3 py-6 text-lg placeholder-idePurple/80'
          placeholder='Mensagem'
          type='text'
          required
        />
        <input
          className='border-2 border-idePurple px-3 py-6 text-lg placeholder-idePurple/80'
          placeholder='Email'
          type='email'
          required
        />
        <input
          className='border-2 border-idePurple px-3 py-6 text-lg placeholder-idePurple/80'
          placeholder='Senha do Cartão'
          type='password'
          required
        />
        <button
          type='submit'
          className='w-2/3 self-center border-2 border-idePurple py-5 text-2xl transition-transform duration-200 hover:scale-105 hover:bg-idePurple hover:text-white'
        >
          Enviar
        </button>
      </form>
    </section>
  )
}
