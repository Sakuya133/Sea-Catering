import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-[url('/bgfood.jpeg')] bg-cover bg-center bg-no-repeat filter brightness-60 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

        <nav className="absolute top-0 left-0 right-0 w-full px-6 py-4 bg-black shadow-md">
          <ul className="flex justify-start gap-6">
            <li><a className="text-white hover:text-blue-400 font-medium" href="/home">Home</a></li>
            <li><a className="text-white hover:text-blue-400 font-medium" href="/menu">Menu</a></li>
            <li><a className="text-white hover:text-blue-400 font-medium" href="/sub">Subscription</a></li>
            <li><a className="text-white hover:text-blue-400 font-medium" href="/contact">Contact Us</a></li>
          </ul>
        </nav>

        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start ">
          <h1 className="text-5xl sm:text-8xl font-extrabold text-white drop-shadow-md tracking-tight text-center brightness-200 ml-10">
            Sea Catering
          </h1>
          <h2 className="text-3xl sm:text-[2.5rem] font-semibold text-center text-white drop-shadow-sm">
            Healthy Meals, Anytime, Anywhere
          </h2>
        </main>

       
      </div>

      {/* Gradient transition */}
      <div className="h-50 bg-gradient-to-b from-[url('/bgfood.jpeg')] to-white" />

      {/* About Us Section */}
      <section className="w-full bg-white text-black py-20 px-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="md:w-1/2 w-full max-w-[450px]">
            <Image 
              src="/salad.webp"
              alt="Healthy food"
              width={200}
              height={200}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
          <div className="w-full md:w-[60%] text-justify pl-10">
            <h2 className="text-6xl font-bold mb-6 text-center">About Us</h2>
            <p className="text-lg leading-relaxed sm:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </section>

      {/* Gradient transition to next section */}
      <div className="h-[100px] bg-gradient-to-b from-white to-[#a5c73b]" />

      

<section className="w-full bg-[#a5c73b] text-black py-20 px-10">
  <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">
    <h2 className="text-6xl font-bold text-center">Feature</h2>
    <p className="text-xl max-w-3xl text-center">
      Di bawah ini adalah berbagai fitur terbaik dari SEA Catering yang kami tawarkan untuk pelanggan kami tercinta.
    </p>
    <div className="flex flex-wrap justify-center gap-10 mt-10">
      {/* Feature 1 */}
      <div className="bg-white p-8 rounded-xl shadow-md w-64 text-center">
        <Image 
          src="/sereal.webp" // Ganti dengan path gambar di folder public
          alt="Feature 1" 
          width={250} 
          height={250} 
          className="mb-4 rounded-md"
        />
       
      </div>
      
      {/* Feature 2 */}
      <div className="bg-white p-8 rounded-xl shadow-md w-64 text-center">
        <Image 
          src="/apayaa.jpeg" // Ganti dengan path gambar di folder public
          alt="Feature 2" 
          width={250} 
          height={250} 
          className="mb-4 rounded-md"
        />
       
      </div>
      
      {/* Feature 3 */}
      <div className="bg-white p-8 rounded-xl shadow-md w-64 text-center">
        <Image 
          src="/apaya.jpeg" // Ganti dengan path gambar di folder public
          alt="Feature 3" 
          width={250} 
          height={250} 
          className="mb-4 rounded-md"
        />
        
      </div>
    </div>
  </div>
</section>


      {/* Call Person Section */}
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
