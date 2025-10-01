import Link from "next/link"
import Image from "next/image"
import Navitems from "./navitems"

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link href='/'>
            <div className='flex items-centre gap-2.5 cursor-pointer'>
                <Image 
                src='/images/logo.svg' 
                alt='logo' 
                width={46} 
                height={44} 
                />


            </div>
        </Link>
        <div className='flex items-center gap-8'>
            <Navitems />
            <p>Sign In</p>
        </div>
    </div>
  )
}

export default Navbar