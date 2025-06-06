import { Orbitron, Pacifico } from "next/font/google";
import "./style/globals.css";
import { ThemeProvider } from "./context/Theme";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-orbitron",
});

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});

export const metadata = {
  title: "Lucky's Dev Portfolio | Fullstack, Bot & Game Dev",
  description: "A curious developer",
    icons: {
    icon: "/icon.png",        
    shortcut: "/icon.png",    
    apple: "/icon.png",     
  },
  keywords: [
    "Developer",
    "Fullstack Developer",
    "Next.js Portfolio",
    "Discord Bots",
    "Game Developer",
    "Node.js",
    "MongoDB",
    "REST API",
    "Personal Website",
    "Frontend",
    "Backend",
  ],
  metadataBase: new URL("https://prathamrajpoot.netlify.app"),
  openGraph: {
    title: "Pratham's Developer Portfolio",
    description:
      "lot of fun things",
    url: "https://prathamrajpoot.netlify.app",
    siteName: "Pratham's Dev Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${pacifico.variable} ${orbitron.className} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
