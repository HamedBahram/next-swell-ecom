import Link from 'next/link'

import ThemeButton from '@/components/ui/ThemeButton'

const Header = () => {
  return (
    <header className='z-10 py-10 text-stone-400'>
      <nav className='container flex items-center justify-between'>
        {/* Logo */}
        <div>
          <Link
            href='/'
            className='text-2xl font-bold uppercase tracking-widest'
          >
            CAFE
          </Link>
        </div>

        {/* Nav links */}
        <ul className='flex items-center gap-10'>
          <li className='text-sm font-medium uppercase tracking-wider'>
            <Link href='/products'>Products</Link>
          </li>
        </ul>

        {/* Shopping cart */}
        <div className='flex items-center justify-between gap-6'>
          <ThemeButton />
        </div>
      </nav>
    </header>
  )
}

export default Header
