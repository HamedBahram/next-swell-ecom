import Link from 'next/link'

import { SignedIn } from '@clerk/nextjs'

import ThemeButton from '@/components/ui/ThemeButton'
import UserAvatarButton from '@/components/ui/UserAvatarButton'

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
          <SignedIn>
            <li className='text-sm font-medium uppercase tracking-wider'>
              <Link href='/dashboard'>Dashboard</Link>
            </li>
          </SignedIn>
        </ul>

        {/* Shopping cart */}
        <div className='flex items-center justify-between gap-6'>
          <ThemeButton />
          <UserAvatarButton />
        </div>
      </nav>
    </header>
  )
}

export default Header
