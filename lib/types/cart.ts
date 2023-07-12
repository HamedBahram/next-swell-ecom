export type AddToCartInput = {
  productId: string
  quantity: number
  options?: { Size: string | undefined }
  purchaseOption?: {
    type: string
    planId: string
  }
}
