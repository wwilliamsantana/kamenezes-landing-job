
export function Hero() {
  return (
    <article className="py-28 text-stone-500 gap-6 max-w-7xl flex items-center justify-around mx-auto px-5 max-md:flex-col max-md:justify-center" >
      <div className="w-md max-[470px]:w-80">
        <h1 className="text-3xl font-bold" >Ajudo mulheres a se livrar das estrias.</h1>
        <p className="text-sm">Descubra o poder dos tratamentos que estimulam o colágeno, reduzem marcas e devolvem a confiança que você merece.</p>
      </div>
      <a href="https://wa.link/jih31k" target="_blank">
        <button className="bg-stone-500 text-sm py-3 px-4 text-white rounded-md hover:bg-stone-600 font-bold cursor-pointer">Agende agora sua avaliação grátis</button>
      </a>

    </article>
  )
}