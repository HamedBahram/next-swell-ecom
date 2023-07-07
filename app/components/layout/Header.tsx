import Link from 'next/link'

import { SignedIn } from '@clerk/nextjs'

import ThemeButton from '@/components/ui/ThemeButton'
import UserAvatarButton from '@/components/ui/UserAvatarButton'
import NavLink from '../ui/NavLink'
import ShoppingCartButton from '../ui/ShoppingCartButton'

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
