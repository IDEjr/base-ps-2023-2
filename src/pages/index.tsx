import HomeSection from "@/components/sections/home"
import AboutSection from "@/components/sections/about"
import StarterSection from "@/components/sections/starter"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

import { Press_Start_2P } from 'next/font/google'

const pokemonFont = Press_Start_2P({ weight: '400', subsets: ['latin'], variable: "--font-press-start" })

export default function Page() {
  return (
    // Estrutura da página
    <div className={"text-white snap-y snap-mandatory overflow-y-scroll h-screen w-screen " + pokemonFont.className}>
      <Header />

      <HomeSection />
      <StarterSection />
      <AboutSection />

      <Footer />
    </div>
  )
}