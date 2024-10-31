import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import { Pacifico, Borel, Poppins, Montserrat, Delius } from "next/font/google";

 const delius = Delius({
  subsets: ['latin'],
  variable: '--font-delius',
  weight: '400',
 });
 
const borel = Borel({
  subsets: ['latin'],
  variable: '--font-borel',
  weight: '400',
  display: 'swap',
});

const pacifico = Pacifico({
  subsets: ['latin'],
  variable: '--font-pacifico',
  weight: '400',
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} ${borel.variable} ${poppins.variable} ${montserrat.variable} ${delius.variable} antialiased bg-gray-100`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}

