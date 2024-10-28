import Hero from './components/Hero';
import Recent from './components/Recent';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import Featured from './components/Featured';



export default function Home() {
  return (
    <div className="h-screen w-full text-black flex flex-col gap-32 overflow-x-hidden">

      <main className="flex flex-col gap-24">

        <Navbar />
        <Hero />
        <Recent />
        <Featured />
        <Footer />







      </main>


    </div>

  );

}
