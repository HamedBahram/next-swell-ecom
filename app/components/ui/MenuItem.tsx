import { forwardRef } from 'react'
import Link from 'next/link'

type MenuItemProps = {
  href: any
  children: React.ReactNode
  className: string
}

const MenuItem = forwardRef<HTMLAnchorElement, MenuItemProps>(function MenuItem(
  props,
  ref
) {
  const { href, children, ...rest } = props
  return (
    <Link href={href} ref={ref} {...rest}>
      {children}
    </Link>
  )
})

export default MenuItem
