import swell from '@/lib/swell/client'
import { AddToCartInput } from '@/lib/types'

export const addToCart = async (item: AddToCartInput) => {
  return await swell.cart.addItem(item)
}

export const removeFromCart = async (itemId: string) => {
  return await swell.cart.removeItem(itemId)
}

export const updateProductQuantity = async (
  itemId: string,
  quantity: number
) => {
  return await swell.cart.updateItem(itemId, { quantity })
}

export const emptyTheCart = async () => {
  return await swell.cart.setItems([])
}

export const getCart = async () => {
  return await swell.cart.get()
}
