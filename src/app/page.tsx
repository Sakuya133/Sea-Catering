import Image from "next/image";
import "./globals.css"; 

export default function Home() {
  return (
    <div className="bg-[url('/bgfood.jpg')] bg-cover bg-center bg-no-repeat filter brightness-50 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <nav className="absolute top-0 left-0 right-0 w-full px-6 py-4 bg-black shadow-md">
        <ul className="flex justify-start gap-6">
          <li><a className="text-white hover:text-blue-400 font-medium" href="#home">Home</a></li>
          <li><a className="text-white hover:text-blue-400 font-medium" href="#news">News</a></li>
          <li><a className="text-white hover:text-blue-400 font-medium" href="#contact">Contact</a></li>
          <li><a className="text-white hover:text-blue-400 font-medium" href="#about">About</a></li>
        </ul>
      </nav>

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start ">
        <Image
          className="dark:invert "
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
          
          
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">SEA Catering</li>
          <li className="tracking-[-.01em]">Healthy Meals, Anytime, Anywhere</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
        
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="#">
          <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
          Manager: Brian
        </a>
        <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="#">
          <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
          Phone Number: 08123456789
        </a>
      </footer>
    </div>
  );
}
