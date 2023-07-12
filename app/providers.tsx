'use client'

import { ThemeProvider } from 'next-themes'
import CartProvider from '@/lib/context/CartProvider'
import ShoppingCart from '@/components/products/ShoppingCart'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='dark'>
      <CartProvider>
        {children}
        <ShoppingCart />
      </CartProvider>
    </ThemeProvider>
  )
}

export default Providers
