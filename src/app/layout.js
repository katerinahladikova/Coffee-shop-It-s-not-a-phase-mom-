import { Raleway, UnifrakturMaguntia } from "next/font/google";
import "./globals.css";
import Header from "./Header"

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const unifrakturMaguntia = UnifrakturMaguntia({
  variable: "--font-unifraktur-maguntia",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "It´s not a phase mom!",
  description: "Alternativní kavárna v Brně",
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <body className={`${raleway.variable} ${unifrakturMaguntia.variable}`}>
        <Header />
        {children}

      </body>
    </html>
  );
}
