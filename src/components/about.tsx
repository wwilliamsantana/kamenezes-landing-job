
export function About() {
  return (
    <article className=" py-20  bg-stone-300">
      <div className="max-w-7xl mx-auto flex justify-around items-center gap-10 max-sm:flex-col ">

        <div className="rounded-full border-2 border-stone-700">
          <img className="rounded-full border-2" src={"/picture.jpeg"} width={300} height={300} alt="author photo" />
        </div>
        <div className="w-1/2 grid gap-4 text-stone-700 max-sm:w-2/3 ">
          <h2 className="text-2xl font-bold ">Conheça a Dra. Karen Santana: Sua jornada para uma Pele Sem Estrias</h2>
          <p >Tratamento avançado para pele, com foco especial na eliminação de estrias. Abordagem personalizada e o uso das mais modernas técnicas de microagulhamento garantem resultados eficazes e duradouros. Estou comprometida em ajudar você a recuperar a autoestima e a exibir uma pele linda e saudável.</p>
          <div className="flex items-center text-sm font-bold  gap-10 mt-5">
            <div className="flex flex-col gap-4">
              <span>Especialista em Microagulhamento</span>
              <span>Tecnologia de Ponta</span>
            </div>
            <div className="flex flex-col gap-4">
              <span>Atendimento personalizado</span>
              <span>Resultados Comprovados</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}