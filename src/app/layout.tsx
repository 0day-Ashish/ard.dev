import "./globals.css";

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
    <html lang="en" className="overflow-x-hidden">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Dangrek&family=Workbench&display=swap" rel="stylesheet"/>
      </head>
      <body className="antialiased min-h-screen bg-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
