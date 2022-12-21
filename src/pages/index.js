import Layout from "../layout";
import Link from "next/link";
import Image from "next/image";
import Triangel from "../components/particles/triangel";
import Bounce from "../components/particles/bounce";
import Blur from "../components/particles/blur";

const Home = () => {
  return (
    <Layout>
        <main className='w-full py-32 md:px-16 px-4'>
          <Blur/>
          <section className='container max-w-screen-xl md:flex mx-auto'>
            <div className='md:w-1/2 my-auto relative'>
                <h1 className='font-bold text-5xl lg:text-6xl relative w-1/2'>Digital
                  <span className='text-sky-500'>kios</span>
                  <span className='absolute top-5 right-0 -z-10 animate-spin-slow'>
                    <Triangel/>
                  </span>
                </h1>
                
              <h2 className='font-semibold text-3xl md:text-2xl lg:text-4xl my-3 text-slate-800'>Penyedia Layanan, Jasa, dan Produk Digital</h2>
              <p className='text-sm lg:text-base'>Buat dan Tingkatkan Bisnismu. Belum punya bisnis? <br/> Mulai aja dulu. Tekan Lihat Produk di bawah.</p>
              
              <span className='hover:bg-transparent border-2 shadow-md 
                 hover:text-sky-500 font-semibold rounded-md p-4 my-4 block w-1/2 lg:w-4/12 text-center
                  bg-sky-500 text-slate-100 hover:duration-300 hover:ease-linear hover:cursor-pointer relative
                 '>
                <Link href='#' >Lihat Produk</Link>
                <span className="flex h-4 w-4 absolute bottom-12 right-0">
                  <Bounce/>
                </span>
              </span>
              
            </div>

            <div className='md:w-1/2 my-auto'>
              <Image 
                src='/images/digitalkios-header.png' 
                alt='Digitalkios Header'
                width={1000}
                height={1000}
              />
            </div>
          </section>
          
        </main>
    </Layout>
  )
}

export default Home;