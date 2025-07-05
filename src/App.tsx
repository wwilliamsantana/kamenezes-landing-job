import { About } from "./components/about";
import { Contacts } from "./components/contact";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Results } from "./components/result";
import { Treatment } from "./components/treatment";


export function App() {
  return (
    <div className="min-h-full ">

      {/* Header */}

      <Header />

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


