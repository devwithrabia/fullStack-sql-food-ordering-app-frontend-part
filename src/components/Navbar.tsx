import Link from 'next/link'
import MobileMenu from './MobileMenu'
import CartIcon from './CartIcon'
import Image from 'next/image'
import { UserLinks } from './UserLinks'

//yhan md ka mtlb desktop screen he css men(1024 se choti screen)
//or lg ka mtlb bht bdi screen(1024 se bdi screen)
//or 768 se choti mobile screen

const Navbar = () => {
  return (
    <div className='h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40'>
      <div className='hidden md:flex gap-4 flex-1 justify-center '>
        <Link href='/'>Home Page</Link>
        <Link href='/menu'>Menu</Link>
        <Link href='/'>Contact</Link>
      </div>

      <div className='text-xl md:font-bold flex-1 md:text-center'>
        <Link href='/'>Massimo</Link>
      </div>

      <div className='hidden md:flex gap-4 items-center flex-1 justify-center'>
        <div className=' md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md'>
          <Image src='/phone.png' alt='' width={20} height={20} />
          <span>123 456 78</span>
        </div>

        <UserLinks />

        <Link href='/cart'>
          <CartIcon />
        </Link>
      </div>

      <div className='md:hidden'>
        <MobileMenu />
      </div>
    </div>
  )
}

export default Navbar
