

export function Footer() {
  return (
    <footer className="bg-stone-800  ">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-stone-200 py-10 gap-5">
        <div className="flex flex-col items-center text-sm ">
          <img src={"/logo.png"} width={130} height={130} alt="logo" />
        </div>

        <div className="text-center">
          <h3 className="">Karen Santana - Especialista em Eliminação de Estrias</h3>
          <span className="text-sm">Transformando sua pele, elevando sua autoestima.</span>
        </div>

        <nav className="mt-4 flex gap-10 text-sm underline max-sm:hidden">
          <a href="">Início</a>
          <a href="">Sobre Nós</a>
          <a href="">O Tratamento</a>
          <a href="">Resultados</a>
          <a href="">Contato</a>
        </nav>

        <div className=" mt-6 flex gap-2 underline text-xs text-stone-500 flex-col ">
          <span>@ 2025 Karen Santana. Todos os direitos reservados.</span>
          <a href="">Política de Privacidade | Termos de uso</a>
        </div>
      </div>
    </footer>
  )
}