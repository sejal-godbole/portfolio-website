import { Inter, Space_Grotesk, Roboto_Condensed } from "next/font/google";
import "./globals.css";
// ... other imports

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
})

const roboto = Roboto_Condensed({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        
        {/* --- START BACKGROUND GRID --- */}
        <div className="fixed left-0 top-0 -z-10 h-full w-full bg-background">
          {/* UPDATED: Changed color from #80808012 to #00000020 (Darker lines) 
             If it's still too light, try increasing 20 to 30 or 40.
          */}
          <div className="absolute h-full w-full bg-[linear-gradient(to_right,#00000020_1px,transparent_1px),linear-gradient(to_bottom,#00000020_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          {/* This represents the 'fog' - increased opacity slightly for better blending */}
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-30 blur-[100px]"></div>
        </div>
        {/* --- END BACKGROUND GRID --- */}

        {children}
      </body>
    </html>
  );
}