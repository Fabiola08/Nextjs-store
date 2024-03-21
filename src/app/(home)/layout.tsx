import { Hero } from "app/componentes/home/Hero"
import { Description } from "app/componentes/home/Desciption"

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Hero />
      <Description />
      {children}
    </div>
  )
}