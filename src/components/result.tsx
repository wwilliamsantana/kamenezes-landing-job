

export function Results() {
  return (
    <article className=" py-20  bg-stone-300">
      <div className="max-w-7xl mx-auto grid gap-10 text-stone-700">
        <h2 className="font-bold text-2xl text-center">Transformação Reais: Veja Nossos Resultados</h2>
        <div className="flex items-center justify-center gap-6 max-sm:flex-col">
          <div className="flex flex-col items-center justify-center gap-3 shadow-2xl rounded-lg overflow-hidden">
            <img src={"/result-3.jpg"} width={300} height={300} />
            <p className="font-bold">Caso 1: na coxa</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 shadow-2xl rounded-lg overflow-hidden">
            <img src={"/result.jpg"} width={300} height={300} />
            <p className="font-bold">Caso 2: no glúteo</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 shadow-2xl rounded-lg overflow-hidden ">
            <img src={"/result-2.jpg"} width={300} height={300} />
            <p className="font-bold">Caso 3: no abdômen</p>
          </div>

        </div>
      </div>
    </article>
  )
}