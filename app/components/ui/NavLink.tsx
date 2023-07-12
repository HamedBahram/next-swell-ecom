'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import clsx from 'clsx'

type NavLinkProps = {
  href: string
  className?: string
  children: React.ReactNode
}

const NavLink = ({ href, className, children, ...props }: NavLinkProps) => {
  const pathname = usePathname()
  const isActive = href === pathname

  return (
    <Link
      {...props}
      href={href}
      className={clsx(
        className,
        isActive &&
          'underline decoration-sky-600 decoration-1 underline-offset-8'
      )}
    >
      {children}
    </Link>
  )
}

export default NavLink
