'use client'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-black px-6">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/*Left: Text */}
        <div className="space-y-6">
          <h1 className="text-8xl sm:text-8xl font-bold text-white leading-tight">
            My Portfolio
          </h1>
          <p className="inline-block px-4 py-2 text-white font-bold text-2xl">
            Hello I'm Zah! In the GREAT wise words of 50cent  - If I can't do it, HOMIE.. It can't be done.I'M GONNA TAKE IT TO THE TOP!
          </p>
          {/* <div className="flex gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition">
              Explore Now
            </button>
            <button className="border border-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition">
              Play Videos
            </button>
          </div> */}
        </div>

       {/** Right: Image  */}
        <div className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-md">
          <img
            src="/images/hero.jpg"
            alt="Hero Visual"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}


  
