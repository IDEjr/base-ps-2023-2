export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full h-[512px] bg-footer snap-start relative">
      <div className="flex flex-row">
        <a href="link-para-a-primeira-pagina.html" className = "mr-10">
          <img src="/img/pokemon-logo.png" alt="Imagem 1" />
        </a>

        <a href="https://www.instagram.com/ide_jr/?hl=en" className="mr-10">
          <img src="/img/instagram-logo.png" alt="Imagem 2" />
        </a>

        <a href="link-para-a-terceira-pagina.html" className="mr-10">
          <img src="/img/linkedin-logo.png" alt="Imagem 3" />
        </a>

        <a href="link-para-a-terceira-pagina.html" className="mr-10">
          <img src="/img/ide-logo.png" alt="Imagem 4" />
        </a>
      </div>
      <div className='mt-20'>
        <p className='text-center'>株式会社ポケモン (The Pokémon Company) © x IDE © Todos os direitos reservados.</p>
        <p className='text-center mt-10'>Termos de Uso | Politica de Privacidade | Política de Cookies</p>
      </div>
      <div className="absolute bottom-16 right-16">
        <img src="/img/ide-logo.png" alt="Imagem 5" className="w-32 h-16"/>
      </div>
    </footer>
  );
}