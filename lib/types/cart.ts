import { CartItemOption } from 'swell-js'

export type AddToCartInput = {
  productId: string
  quantity: number
  options?: CartItemOption[]
  purchaseOption?: {
    type: string
    planId: string
  }
}
