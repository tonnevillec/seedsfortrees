import './globals.css';
import Header from "@/app/Header";
import Footer from "@/app/Footer";
import Script from "next/script";

export const metadata = {
  title: 'Seeds for trees',
  description: 'A simple gesture to renew nature, one tree at a time. Welcome to "Seeds for Trees," an initiative born from Denman Corporation\'s commitment to preserving our planet and combating climate change. In 2023, Denman Corporation proudly owns forests in North and South Carolina, where nature thrives, and trees are at the heart of our common mission.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <Script>
            var _paq = window._paq = window._paq || [];

            _paq.push(["setDoNotTrack", true]);
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);

            var u="https://stats.seedsfortrees.org/";

            _paq.push(['setTrackerUrl', u+'matomo.php']);
            _paq.push(['setSiteId', '1']);

            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
        </Script>
        <title>Seeds for trees</title>
      </head>
      <body className={"text-neutral-800"}>
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
