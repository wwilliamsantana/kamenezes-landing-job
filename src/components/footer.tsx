

export function Footer() {
  return (
    <footer className="bg-stone-800  ">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-stone-200 py-10 gap-4">
        <img src={"/logo.png"} className="w-36" alt="logo" />
        <div className="text-center">
          <h3 className="">Karen Santana - Especialista em Estrias</h3>
          <span className="text-xs">Transformando sua pele, elevando sua autoestima.</span>
        </div>







        <span className="underline text-xs text-stone-500 ">@2025 Karen Santana. Todos os direitos reservados.</span>


      </div>
    </footer>
  )
}