import './globals.css'
import Header from "@/app/Header";
import Footer from "@/app/Footer";
export const metadata = {
  title: 'Seeds for trees',
  description: 'Un geste simple pour renouveler la nature, un arbre à la fois',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />

        {/*<main className={"flex min-h-screen flex-col items-center justify-between p-24"}>*/}
        <main className={"bg-white"}>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
