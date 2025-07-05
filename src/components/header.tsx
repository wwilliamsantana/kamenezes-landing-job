

export function Header() {
  return (
    <header className="border-b border-stone-400/20 ">
      <div className="max-w-7xl flex items-center mx-auto justify-around ">
        <span />
        <img src={"./logo.png"} width={120} height={120} alt="logo" />
        <button className="bg-stone-500 py-2 px-3 text-sm text-white rounded-sm hover:bg-stone-400" >Agende agora</button>
      </div>
    </header>
  )
}