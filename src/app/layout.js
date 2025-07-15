// app/layout.js

import { Inter, Comfortaa, Dancing_Script, Lora, Caveat, Pacifico, Shadows_Into_Light, Poppins, Roboto_Mono, Playfair_Display, Oswald, Raleway, Montserrat, Indie_Flower } from 'next/font/google';
import './globals.css';

// Initialize all the fonts we want to use
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const comfortaa = Comfortaa({ subsets: ['latin'], weight: '400', variable: '--font-comfortaa' });
const dancingScript = Dancing_Script({ subsets: ['latin'], variable: '--font-dancing-script' });
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' });
const caveat = Caveat({ subsets: ['latin'], variable: '--font-caveat' });
const pacifico = Pacifico({ subsets: ['latin'], weight: '400', variable: '--font-pacifico' });
const shadowsIntoLight = Shadows_Into_Light({ subsets: ['latin'], weight: '400', variable: '--font-shadows' });
const poppins = Poppins({ subsets: ['latin'], weight: '400', variable: '--font-poppins' });
const robotoMono = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' });
const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });
const indieFlower = Indie_Flower({ subsets: ['latin'], weight: '400', variable: '--font-indie-flower' });


export const metadata = {
  title: 'Zarf - The Art of Digital Gifting',
  description: 'Craft beautiful, animated messages for the people you care about.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="light dark" />
      </head>
      {/* Apply all font variables to the body */}
      <body className={`
        ${inter.variable} ${comfortaa.variable} ${dancingScript.variable} 
        ${lora.variable} ${caveat.variable} ${pacifico.variable}
        ${shadowsIntoLight.variable} ${poppins.variable} ${robotoMono.variable}
        ${playfair.variable} ${oswald.variable} ${raleway.variable}
        ${montserrat.variable} ${indieFlower.variable}
      `}>
        {children}
      </body>
    </html>
  );
}