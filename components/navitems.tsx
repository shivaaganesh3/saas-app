import Link from "next/link"

const navitems = [
    {label: 'Home', href: '/'},
    {label: 'Companions', href: '/companions'},
    {label: 'My Journey', href: '/my-journey'},
]

const Navitems = () => {
  return (
    <nav className='flex items-center gap-4'>
        {navitems.map(({label, href})=>(
            <Link href={href} key={label}>
                {label}
                
            </Link>
        )
        )}
    </nav>
  )
}

export default Navitems