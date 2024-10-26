import Hero from './components/Hero';
import Recent from './components/Recent';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';



export default function Home() {
  return (
    <div className="h-[2453px] w-full text-black flex flex-col gap-32">

      <main className="flex flex-col gap-24">

        <Navbar />
        <Hero />
        <Recent />
        <Footer />







      </main>


    </div>

  );

}
