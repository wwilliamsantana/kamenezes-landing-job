
export function About() {
  return (
    <article className=" p-16 bg-stone-300 max-w-7xl mx-auto flex justify-around items-center rounded-md gap-10 max-sm:flex-col ">

      <img className="rounded-full border-2 border-stone-200" src={"./picture.jpeg"} width={250} height={250} alt="author photo" />

      <div className="w-1/2 grid gap-4 text-stone-700 max-sm:w-2/3 ">
        <h2 className="text-2xl font-bold ">Venha me conhecer é iniciar sua jornada para uma Pele Sem Estrias</h2>
        <p >Tratamento avançado para pele, com foco especial na eliminação de estrias. Abordagem personalizada e o uso das mais modernas técnicas de microagulhamento que garantem resultados eficazes e duradouros. <br /> <strong>Estou comprometida em ajudar você a recuperar a autoestima e a exibir uma pele linda e saudável.</strong></p>
        <div className="flex items-center text-sm font-semibold  gap-10 mt-5">
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
    </article>

  )
}