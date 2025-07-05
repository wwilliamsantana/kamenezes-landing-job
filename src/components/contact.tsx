export function Contacts() {
  return (
    <article className=" py-20 w-1/2 max-w-7xl mx-auto text-stone-700  flex flex-col items-center justify-center gap-8 max-sm:w-2/3">
      <h2 className="font-bold text-2xl text-center ">Dê o Primeiro Passo Rumo à Sua Pele Ideal!</h2>
      <p >Não deixe que as estrias afetem sua autoestima. Estou pronta para te ajudar a conquistar a pele que você sempre desejou. Agende sua avaliação e descubra o plano de tratamento personalizado para voce.</p>
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm">Endereço do consultório: Rua François, 825 - Aracaju, Sergipe</span>
        <a className="text-sm underline" href="">Ver no Google Maps</a>
        <span className="text-sm mt-2">Horário de Atendimento: Segunda a Sexta - 14h ás 20h</span>
      </div>
    </article>
  )
}