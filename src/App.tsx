import { About } from "./components/about";
import { Contacts } from "./components/contact";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { Results } from "./components/result";
import { Treatment } from "./components/treatment";


export function App() {
  return (
    <div className="min-h-full ">

      {/* Header */}

      <header className="border-b border-stone-400/20 ">
        <div className="max-w-7xl flex items-center mx-auto justify-around ">
          <image href={"/logo.png"} width={120} height={120} />
          <button className="bg-stone-500 py-2 px-3 text-sm text-white rounded-sm hover:bg-stone-400" >Agende agora</button>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Treatment />
        <Results />
        <Contacts />
      </main>
      <Footer />
    </div>
  )
}


