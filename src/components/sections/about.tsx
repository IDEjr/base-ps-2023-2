export default function AboutSection() {
  return (
    <section className='flex min-h-screen w-full snap-start flex-col bg-idePurple relative'>
      <div className="mx-[4%] my-[10%]">

        <div className="flex mb-[3%] flex-row justify-start items-start">
          <p className="font-normal text-[60px] leading-[70px]">SOBRE NOS</p>
        </div>


        <div className="flex flex-row">

          <div className="bg-ideRed w-[0.5%]">
          </div>

          <div className="items-center justify-center w-[50%] h-[] bg-gray-900 flex flex-col">        
            <p className="mx-[5%] my-[10%]" >A IDE é a empresa júnior dos cursos Ciência e Engenharia de Computação da Universidade Federal do Rio Grande do Sul. Formada por alunos interessados em se tornarem empreendedores e profissionais excepcionais, a IDE fornece soluções em software, como sites e sistemas, com preços abaixo do mercado, aliados à excelência da UFRGS, o Instituto de Informática e seus professores, que fornecem apoio técnico e aconselhamento aos estudantes.</p> 
            <img src="/img/ide-logo.png" alt="ide-logo" className="w-32 h-16" />
          </div>

          <div className="flex items-center justify-center w-[49.5%]">
            <img src="/img/neko-comemorando.png" alt="neko-comemorando" />
          </div>

        </div>

      </div>

    </section>
  );
}