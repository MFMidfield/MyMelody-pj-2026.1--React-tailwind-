import './App.css'
import Nav from './components/Nav.jsx'
import { Link } from "react-scroll";
import Footer from './components/Footer.jsx'
import myme from './assets/mymelody-img-1.png'
import myme2 from './assets/8.png'
import myme3 from './assets/9.png'
import myme4 from './assets/10.png'
import myme5 from './assets/11.png'



function App() {

  return (
    <>
      <div className="min-h-screen bg-[linear-gradient(36deg,#fcfcfc_0%,#FCCAF9_100%)]">
        <Nav />
        <section className='flex items-center relative justify-center px-50 py-30'>
          <div className="flex flex-col lg:flex-row items-center justify-between text-left w-full">

            <div className="flex w-100 h-100 mb-1 overflow-hidden rounded-lg lg:hidden">
              <img src={myme} className='w-full h-full object-cover object-bottom' />
            </div>

            <div className='flex flex-col justify-center items-center text-center lg:items-start lg:text-left'>
              <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
                Welcome
              </h1>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl">
                This is my first website built with React and Tailwind CSS.
                I used AI for about 10%, and the other 90% was written by me.
              </p>
              <Link to="about" smooth={true} duration={500} className="hover:text-[#FF85FB] cursor-pointer transition-colors">
              <button className="justify-center w-40 bg-[#FF85FB] text-white px-6 py-3 rounded-md text-lg font-medium cursor-pointer transition-all duration-300 ease-in-out hover:scale-102 bg-[#FF9EFC] active:scale-95">
                Get Started
              </button>
              </Link>
            </div>

            <div className='hidden sm:hidden md:hidden lg:flex w-106 h-128 object-cover object-left'>
              <img src={myme} className='w-full h-full object-cover object-left' />
            </div>
          </div>
        </section>

        <section id='about'>
          <div className="flex flex-row justify-between px-5 py-0 lg:px-50 py-30">
            <div className="hidden w-full items-center justify-center lg:flex">
              <div className='hidden w-fit py-13 h-120  lg:flex'>
                <img src={myme5} className='object-cover scale-130' />
              </div>
            </div>
            <div className=" flex flex-col justify-center w-260 ">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center lg:text-left">
                About My Melody
              </h2>
              <ul className="list-disc list-outside pl-8 text-gray-700 space-y-4 text-left">
                <li class="leading-relaxed">My Melody is a kind and gentle character.</li>
                <li class="leading-relaxed">Her pink hood and soft pastel colors give her a cute and cozy.</li>
                <li class="leading-relaxed">Everything about My Melody, from her face to her outfit, is feel calm.</li>
                <li class="leading-relaxed">She makes people feel relaxed and welcomed.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id='contact'>
          <div className="flex justify-center px-7 py-10 lg:px-50 py-30">
            <div className="flex flex-col justify-center items-center text-center px-3 gap-10 lg:flex-row">
              <div className="max-w-100 flex flex-col w-full bg-white rounded-4xl shadow-lg overflow-hidden p-6 h-130 transition-all duration-300 ease-in-out hover:scale-102 active:scale-100">
                <div className="w-full h-full mb-1 overflow-hidden rounded-lg">
                  <img src={myme2} className='w-full h-full object-cover object-bottom' />
                </div>
                <div className='mb-2'>
                  <h3 className="text-2xl font-bold text-gray-900 mt-4">Who is My Melody?</h3>
                  <p className="text-gray-700 mt-2">My Melody is a sweet and gentle bunny from Sanrio who loves baking and helping her friends.</p>
                </div>
              </div>
              <div className="max-w-100 flex flex-col w-full bg-white rounded-4xl shadow-lg overflow-hidden p-6 h-130 transition-all duration-300 ease-in-out hover:scale-102 active:scale-100">
                <div className="w-full h-full mb-1 overflow-hidden rounded-lg">
                  <img src={myme3} className='w-full h-full object-cover object-bottom' />
                </div>
                <div className='mb-2'>
                  <h3 className="text-2xl font-bold text-gray-900 mt-4">Her Style</h3>
                  <p className="text-gray-700 mt-2">She is known for her pink hood, soft colors, and a cute, cozy aesthetic.</p>
                </div>
              </div>
              <div className="max-w-100 flex flex-col w-full bg-white rounded-4xl shadow-lg overflow-hidden p-6 h-130 transition-all duration-300 ease-in-out hover:scale-102 active:scale-100">
                <div className="w-full h-full mb-1 overflow-hidden rounded-lg">
                  <img src={myme4} className='w-full h-full object-cover object-bottom' />
                </div>
                <div className='mb-2'>
                  <h3 className="text-2xl font-bold text-gray-900 mt-4">Why People Love Her</h3>
                  <p className="text-gray-700 mt-2">People love My Melody because she represents kindness, warmth, and positivity.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}

export default App
