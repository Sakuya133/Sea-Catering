import Image from "next/image";



export default function Home() {
  return (
    <>
    <div className="bg-[url('/bgfood.jpe')] bg-cover bg-center bg-no-repeat filter brightness-60 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <nav className="absolute top-0 left-0 right-0 w-full px-6 py-4 bg-black shadow-md">
        <ul className="flex justify-start gap-6">
          <li><a className="text-white hover:text-blue-400 font-medium" href="/home">Home</a></li>
          <li><a className="text-white hover:text-blue-400 font-medium" href="/menu">Menu</a></li>
          <li><a className="text-white hover:text-blue-400 font-medium" href="/sub">Subscription</a></li>
          <li><a className="text-white hover:text-blue-400 font-medium" href="#about">Contact Us</a></li>
          <li><a className="text-white hover:text-blue-400 font-medium" href="/register">Log In</a></li>
        </ul>
      </nav>

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start ">
        {/* <Image
          className="dark:invert  "
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
          
          
        /> */}
        <h1 className="text-5xl sm:text-8xl font-extrabold text-white-400 drop-shadow-md tracking-tight text-center brightness-200 ml-10">
            Sea Catering </h1>
            <h2 className="text-3xl sm:text-[2.5rem] font-semibold text-center text-white drop-shadow-sm">
       Healthy Meals, Anytime, Anywhere </h2>

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

            <div className="h-50 bg-gradient-to-b from-black to-white" />
  
           {/* Section baru di bawah footer */}
           <section className="w-full bg-white text-black py-20 px-10">
           <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 ">
              
              {/*Gambar ya ges ya */}
              <div className="md:w-1/2 w-full max-w-[450px] ">
              <Image 
                src="/salad.webp"
                alt="Ini makanan"
                width={200}
                height={200}
                className="w-full h-auto rounded-lg object-cover"
              />
              
              
              </div>
              <div className="w-full md:w-[60%] text-justify pl-10">

      <h2 className="text-6xl font-bold mb-6 text-center ">About Us</h2>
      <p className="text-lg leading-relaxed sm:text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
             </div>
           </section>

         {/* Gradasi transisi dari section sebelumnya */}
<div className="h-[100px] bg-gradient-to-b from-white to-[#a5c73b]" />

{/* Section Feature dengan latar belakang hijau */}
<section className="w-full bg-[#a5c73b] text-black py-20 px-10">
  <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">
    <h2 className="text-6xl font-bold text-center">Feature</h2>

    {/* Tambahkan isi fitur di sini nanti */}
    <p className="text-xl max-w-3xl text-center">
      Di bawah ini adalah berbagai fitur terbaik dari SEA Catering yang kami tawarkan untuk pelanggan kami tercinta.
    </p>
  </div>
</section>


       


       {/*Untuk Call Person */}
          <div className="h-50 bg-gradient-to-b from-white to-black" />
      <section className="w-full bg-black text-white py-20 px-10">
          
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
           </section>
       </>
          
      
      
    
    

  );
}
