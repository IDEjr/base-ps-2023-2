export default function AboutSection() {
  return (
    <section className='relative flex min-h-screen w-full snap-start flex-col bg-idePurple'>
      <div className='mx-[4%] my-[10%]'>
        <div className='mb-[3%] flex flex-row items-start justify-start'>
          <p className='text-[60px] font-normal leading-[70px]'>SOBRE NOS</p>
        </div>

        <div className='flex flex-row'>
          <div className='w-[0.5%] bg-ideRed'></div>

          <div className='flex h-[] w-[50%] flex-col items-center justify-center bg-gray-900'>
            <p className='mx-[5%] my-[10%]'>
              A IDE é a empresa júnior dos cursos Ciência e Engenharia de
              Computação da Universidade Federal do Rio Grande do Sul. Formada
              por alunos interessados em se tornarem empreendedores e
              profissionais excepcionais, a IDE fornece soluções em software,
              como sites e sistemas, com preços abaixo do mercado, aliados à
              excelência da UFRGS, o Instituto de Informática e seus
              professores, que fornecem apoio técnico e aconselhamento aos
              estudantes.
            </p>
            <img src='/img/ide-logo.png' alt='ide-logo' className='h-16 w-32' />
          </div>

          <div className='flex w-[49.5%] items-center justify-center'>
            <img src='/img/neko-comemorando.png' alt='neko-comemorando' />
          </div>
        </div>
      </div>
    </section>
  )
}
