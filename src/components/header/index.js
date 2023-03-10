import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = () => {

    const [hamburger, setBurgerClass] = useState('hamburger-nonactive');
    const [menu_class, setMenuClass] = useState('menu-hidden');
    const [isMenuClicked, setIsMenuClicked] = useState(false);
  
    const updateMenu = () => {
      if(!isMenuClicked) {
        setBurgerClass('hamburger-active')
        setMenuClass('menu-visible')
      } else {
        setBurgerClass('hamburger-nonactive')
        setMenuClass('menu-hidden')
      }
      setIsMenuClicked(!isMenuClicked);
    }

  return (
    <header className='navbar-fixed w-full flex top-0 left-0 items-center z-10 md:px-12 relative'>
        <div className='container mx-auto max-w-screen-xl'>
          <div className='flex justify-between relative'>

            <div className='px-4 flex items-center'>
              <Link href='/' className='font-bold text-2xl block py-6 relative'>Digital<span className='text-sky-500'>kios</span></Link>
            </div>

            <div className='flex items-center px-4'>

                <button id={hamburger} name='hamburger' type='button' className='block absolute right-4 lg:hidden' onClick={updateMenu}>
                    <span className='hamburger-line transition duration-300 ease-in-out origin-top-left bg-black'></span>
                    <span className='hamburger-line-2 transition duration-300 ease-in-out bg-black'></span>
                    <span className='hamburger-line transition duration-300 ease-in-out origin-bottom-left bg-black'></span>
                </button>

                <nav id={menu_class} className='hidden absolute py-5 bg-white dark:bg-opacity-90 bg-opacity-90 font-semibold
                    shadow-lg rounded-lg w-full right-0 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none'>
                    <ul className='block lg:flex items-center gap-6 ml-6 md:ml-0'>
                        <li className='group text-slate-800 hover:text-sky-500 hover:duration-500 hover:ease-in-out'><Link href='#'>Beranda</Link></li>
                        <li className='group text-slate-800 hover:text-sky-500 hover:duration-500 hover:ease-in-out'><Link href='#'>Produk</Link></li>
                        <li className='group text-slate-800 hover:text-sky-500 hover:duration-500 hover:ease-in-out'><Link href='#'>Jasa</Link></li>
                        <li className='group text-slate-800 hover:text-sky-500 hover:duration-500 hover:ease-in-out'><Link href='#'>Kontak Kami</Link></li>
                    </ul>
                </nav>

            </div>
            
          </div>
        </div>
    </header>
  )
}

export default Header