

export function Treatment() {
  return (
    <article className="text-stone-700 py-20 max-w-7xl mx-auto  px-2">
      <h2 className="font-bold text-2xl text-center">Um pouco sobre o tratamento</h2>
      <div className="flex items-center justify-center gap-10 mt-10 max-sm:flex-col ">
        <img className="rounded-lg shadow-2xl w-72 h-72" src={"/photo-one.jpeg"} alt="Marca de estrias" />
        <div className="w-1/2 grid gap-4 max-sm:w-2/3">
          <p >Um procedimento seguro e minimamente invasivo que utiliza microagulhas. Essas microlesões estimulam o processo natural de cicatrização do corpo, promovendo a produção de novo colágeno e elastina, as fibras essenciais para uma pele firme e lisa. Com o tempo, as estrias são gradualmente suavizadas e até mesmo eliminadas, revelando uma pele mais uniforme rejuvenescida.</p>
          <div className="flex items-center text-sm font-bold  gap-10 mt-5">
            <div className="flex flex-col gap-4">
              <span>Reducão visível de estrias</span>
              <span>Melhora a textura e elasticidade</span>
            </div>
            <div className="flex flex-col gap-4">
              <span>Estimula a producão de colágeno</span>
              <span>Tratamento seguro e eficaz</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}