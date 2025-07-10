import "./globals.css";
import { Dangrek, Workbench } from "next/font/google";

const dangrek = Dangrek({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dangrek",
  display: "swap",
});

const workbench = Workbench({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-workbench",
  display: "swap",
});

export const metadata = {
  title: "ard.dev",
  description: "Created by ard",
  icons: {
    icon: [
      {
        url: '/HACKHAZARDS-BADGE.png',
        type: 'image/png',
      }
    ],
    shortcut: '/HACKHAZARDS-BADGE.png',
    apple: '/HACKHAZARDS-BADGE.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dangrek.variable} ${workbench.variable} overflow-x-hidden`}>
      <body className="antialiased min-h-screen bg-black text-white overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  );
}
