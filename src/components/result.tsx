

export function Results() {
  return (
    <article className="p-16 bg-stone-300 max-w-7xl mx-auto flex justify-around items-center flex-col rounded-md gap-10 max-sm:flex-col">
      <h2 className="font-bold text-2xl text-center"> Cada estria tem uma cor. E nós temos o tratamento certo para cada uma!</h2>
      <div className="flex justify-center gap-6 w-full max-lg:flex-wrap">
        <div className="flex flex-col items-center justify-center gap-3 shadow-2xl rounded-lg overflow-hidden w-64 h-80  max-sm:w-48 max-sm:h-64">
          <img src={"/estrias-bra.png"} className="object-cover w-full h-full" />
          <p className="font-bold text-sm uppercase p-2">Branca</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 shadow-2xl rounded-lg overflow-hidden w-64 h-80 max-sm:w-48 max-sm:h-64">
          <img src={"/estrias-verm.png"} className="object-cover w-full h-full" />
          <p className="font-bold text-sm uppercase p-2">Vermelho</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 shadow-2xl rounded-lg overflow-hidden w-64 h-80 max-sm:w-48 max-sm:h-64">
          <img src={"/estrias-marron.png"} className="object-cover w-full h-full" />
          <p className="font-bold text-sm uppercase p-2">Marrom</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 shadow-2xl rounded-lg overflow-hidden w-64 h-80 max-sm:w-48 max-sm:h-64">
          <img src={"/estrias-roxa.png"} className="object-cover w-full h-full" />
          <p className="font-bold text-sm uppercase p-2">Roxa</p>
        </div>

      </div>

    </article>
  )
}