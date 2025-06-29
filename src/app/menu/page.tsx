export default function menu(){
    return (
<main className="p-10 text-white">
            <nav className="absolute top-0 left-0 right-0 w-full px-6 py-4 bg-black shadow-md">
        <ul className="flex justify-start gap-6">
          <li><a className="text-white hover:text-blue-400 font-medium" href="/home">Home</a></li>
          <li><a className="text-white hover:text-blue-400 font-medium" href="/menu">Menu</a></li>
          <li><a className="text-white hover:text-blue-400 font-medium" href="/sub">Subscription</a></li>
          <li><a className="text-white hover:text-blue-400 font-medium" href="#about">Contact Us</a></li>
        </ul>
      </nav>
             <h1 className="text-3xl font-bold">Subscription Page</h1>
             <p>Here you can manage your meal plans.</p>


        </main>




        
    )
}