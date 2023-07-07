'use client'

import { useCart } from '@/lib/context/CartProvider'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

const ShoppingCartButton = () => {
  const { cart, setShowShoppingCart } = useCart()

  return (
    <button
      className='relative flex items-center gap-x-2 rounded-lg px-1.5 py-1 hover:bg-stone-100 dark:hover:bg-stone-700'
      onClick={() => setShowShoppingCart((open: boolean) => !open)}
    >
      <ShoppingCartIcon className='h-7 w-7 text-stone-600 dark:text-stone-400' />

      {cart?.itemQuantity ? (
        <span className='absolute -top-1.5 left-6 flex h-5 w-5 items-center justify-center rounded bg-sky-600 text-xs font-medium text-white'>
          {cart?.itemQuantity}
        </span>
      ) : null}
    </button>
  )
}

export default ShoppingCartButton
