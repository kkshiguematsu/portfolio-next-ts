import Navbar from "@components/Navbar";
import "./globals.css";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en" className="scroll-smooth">
        <body className="bg-[#1e1d20] box-border relative">
            <Navbar/>
            <main className="relative w-full min-h-screen m-auto text-white">
            </main>
          {children}
        </body>
      </html>
    );
  }
  