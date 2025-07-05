


export function Treatment() {
  return (
    <article className="text-stone-700 py-20  max-w-7xl mx-auto  ">
      <h2 className="font-bold text-2xl text-center">Microagulhamento: A ciência por trás da Elminação de Estrias</h2>
      <div className="flex items-center gap-10 mt-10 max-sm:flex-col ">
        <img className="rounded-lg shadow-2xl" src={"/estrias.jpeg"} width={350} height={350} alt="Marca de estrias" />
        <div className="w-1/2 grid gap-4 max-sm:w-2/3">
          <p >O microagulhamento e um procedimento seguro e minimamente invasivo que utiliza microagulhas para criar pequenas perfurações na pele. Essas microlesões estimulam o processo natural de cicatrização do corpo, promovendo a produção de novo colágeno e elastina - as fibras essenciais para uma pele firme e lisa. Com o tempo, as estrias sao gradualmente suavizadas e ate mesmo eliminadas, revelando uma pele mais uniforme rejuvenescida.</p>
          <div className="flex items-center text-sm font-bold  gap-10 mt-5">
            <div className="flex flex-col gap-4">
              <span>Reducao Visível de Estrias</span>
              <span>Melhora a Textura e Elasticidade</span>
            </div>
            <div className="flex flex-col gap-4">
              <span>Estimula a Producão de Colágeno</span>
              <span>Tratamento Seguro e Eficaz</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}