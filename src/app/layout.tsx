import "~/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>gallery</div>
      <div>sign in</div>
    </nav>
  );
}

export const metadata = {
  title: "gallery",
  description: "gallery app with t3 stack",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} flex flex-col gap-4`}>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
