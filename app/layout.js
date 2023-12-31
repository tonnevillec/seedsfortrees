import './globals.css'
import Header from "@/app/Header";
import Footer from "@/app/Footer";
export const metadata = {
  title: 'Seeds for trees',
  description: 'A simple gesture to renew nature, one tree at a time. Welcome to "Seeds for Trees," an initiative born from Denman Corporation\'s commitment to preserving our planet and combating climate change. In 2023, Denman Corporation proudly owns forests in North and South Carolina, where nature thrives, and trees are at the heart of our common mission.',
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
