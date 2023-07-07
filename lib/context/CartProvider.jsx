import {
  useState,
  useEffect,
  createContext,
  useContext,
  useMemo,
  useCallback
} from 'react'
import { getCart, addToCart, removeFromCart } from '@/lib/swell/cart'

const CartContext = createContext()
export const useCart = () => useContext(CartContext)

const CartProvider = ({ children }) => {
  const [showShoppingCart, setShowShoppingCart] = useState(false)

  const [cart, setCart] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getCart()
      .then(setCart)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  const addItem = useCallback(productData => {
    setLoading(true)
    addToCart(productData)
      .then(setCart)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  const removeItem = useCallback(itemId => {
    setLoading(true)
    removeFromCart(itemId)
      .then(setCart)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  const value = useMemo(
    () => ({
      cart,
      error,
      loading,
      showShoppingCart,
      addItem,
      removeItem,
      setShowShoppingCart
    }),
    [
      cart,
      error,
      loading,
      showShoppingCart,
      addItem,
      removeItem,
      setShowShoppingCart
    ]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartProvider
