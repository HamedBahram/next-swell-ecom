import Link from 'next/link'

import { SignedIn } from '@clerk/nextjs'

import NavLink from '@/components/ui/NavLink'
import ThemeButton from '@/components/ui/ThemeButton'
import MobileNavMenu from '@/components/layout/MobileNavMenu'
import UserAvatarButton from '@/components/ui/UserAvatarButton'
import ShoppingCartButton from '@/components/ui/ShoppingCartButton'

const Header = () => {
  return (
    <header className='z-10 py-10 text-stone-400'>
      <nav className='container flex items-center justify-between'>
        {/* mobile menu */}
        <MobileNavMenu />

        {/* Logo */}
        <div className='hidden sm:block'>
          <Link
            href='/'
            className='text-2xl font-bold uppercase tracking-widest'
          >
            CAFE
          </Link>
        </div>

        {/* Nav links */}
        <ul className='hidden items-center gap-10 sm:flex'>
          <li className='text-sm font-medium uppercase tracking-wider'>
            <NavLink href='/products'>Products</NavLink>
          </li>
          <SignedIn>
            <li className='text-sm font-medium uppercase tracking-wider'>
              <NavLink href='/dashboard'>Dashboard</NavLink>
            </li>
          </SignedIn>
        </ul>

        {/* Shopping cart */}
        <div className='flex items-center justify-between gap-3'>
          <ThemeButton />
          <ShoppingCartButton />
          <UserAvatarButton />
        </div>
      </nav>
    </header>
  )
}

export default Header
