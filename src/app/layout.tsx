import { Roboto } from 'next/font/google'
import { Header } from 'app/componentes/shared/Header'
import { Footer } from "app/componentes/shared/Footer";
import { Hero } from "app/componentes/home/Hero"
import { Description } from "app/componentes/home/Desciption"
import 'app/sass/globals.sass'

const roboto = Roboto({
  weight: [ "100", "300", "500", "700"],
  subsets: ["latin"], 
})

// export const metadata: Metadata = {
//   title: "Future World",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    
      <body className= {roboto.className}>
        <Header />

        {children}

        <Footer />
        </body>
    </html>
  );
}
