// app/layout.js

import { Dancing_Script, Caveat, Shadows_Into_Light, Indie_Flower, Lemonada, Amiri, El_Messiri, Tajawal } from 'next/font/google';
import './globals.css';

// --- UPDATED FONT SELECTION ---

// 4 English handwritten-style fonts
const dancingScript = Dancing_Script({ subsets: ['latin'], variable: '--font-dancing-script' });
const caveat = Caveat({ subsets: ['latin'], variable: '--font-caveat' });
const shadowsIntoLight = Shadows_Into_Light({ subsets: ['latin'], weight: '400', variable: '--font-shadows' });
const indieFlower = Indie_Flower({ subsets: ['latin'], weight: '400', variable: '--font-indie-flower' });

// 4 Arabic handwritten-style fonts
const lemonada = Lemonada({ subsets: ['arabic', 'latin'], variable: '--font-lemonada' });
const amiri = Amiri({ subsets: ['arabic', 'latin'], weight: ['400', '700'], variable: '--font-amiri' });
const elMessiri = El_Messiri({ subsets: ['arabic', 'latin'], variable: '--font-el-messiri' });
const tajawal = Tajawal({ subsets: ['arabic', 'latin'], weight: ['400', '700'], variable: '--font-tajawal' });


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
      {/* Apply all new font variables to the body */}
      <body className={`
        ${dancingScript.variable} ${caveat.variable} ${shadowsIntoLight.variable}
        ${indieFlower.variable} ${lemonada.variable} ${amiri.variable}
        ${elMessiri.variable} ${tajawal.variable}
      `}>
        {children}
      </body>
    </html>
  );
}