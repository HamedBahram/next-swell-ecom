import { useCallback, useReducer, Reducer } from 'react'
import { capitalize } from '@/lib/utils'
import { ExtendedProduct } from '@/lib//types'

const init = (product: ExtendedProduct) => {
  // product size options
  const sizeOptions = product?.options?.find(
    option => option.name === 'Size'
  )?.values
  const selectedSize = sizeOptions?.[0]

  // product purchase options
  const purchaseOptions =
    product?.purchaseOptions &&
    Object.keys(product?.purchaseOptions).map(option => ({
      id: option,
      name: capitalize(option)
    }))
  const selectedPurchaseOption = purchaseOptions?.[0]

  // subscription plans
  const subscriptionPlans = product?.purchaseOptions?.subscription?.plans
  const selectedSubscriptionPlan = subscriptionPlans?.[0]

  // price
  const originalPrice = product?.origPrice
  const basePrice = product?.price
  const price = product?.price

  return {
    sizeOptions,
    selectedSize,
    purchaseOptions,
    selectedPurchaseOption,
    subscriptionPlans,
    selectedSubscriptionPlan,
    originalPrice,
    basePrice,
    price
  }
}

export type ProductReducerState = ReturnType<typeof init>
export type ProductReducerAction =
  | { type: 'SELECT_SIZE'; selectedSize: any }
  | { type: 'SELECT_PURCHASE_OPTION'; selectedPurchaseOption: any }
  | { type: 'SELECT_SUBSCRIPTION_PLAN'; selectedSubscriptionPlan: any }
  | { type: 'RESET' }

const reducer: Reducer<ProductReducerState, ProductReducerAction> = (
  state,
  action
) => {
  switch (action.type) {
    case 'SELECT_SIZE':
      return {
        ...state,
        selectedSize: action.selectedSize
      }
    case 'SELECT_PURCHASE_OPTION':
      return {
        ...state,
        selectedPurchaseOption: action.selectedPurchaseOption,
        basePrice:
          action.selectedPurchaseOption.id === 'subscription'
            ? state.selectedSubscriptionPlan.price
            : state.price
      }
    case 'SELECT_SUBSCRIPTION_PLAN':
      return {
        ...state,
        selectedSubscriptionPlan: action.selectedSubscriptionPlan,
        basePrice: action.selectedSubscriptionPlan.price
      }
    default:
      throw new Error()
  }
}

const useProduct = ({ product }: { product: ExtendedProduct }) => {
  const [state, dispatch] = useReducer(reducer, product, init)

  const selectSize = useCallback(
    (selectedSize: any) => dispatch({ type: 'SELECT_SIZE', selectedSize }),
    []
  )
  const selectPurchaseOption = useCallback(
    (selectedPurchaseOption: any) =>
      dispatch({
        type: 'SELECT_PURCHASE_OPTION',
        selectedPurchaseOption
      }),
    []
  )
  const selectSubscriptionPlan = useCallback(
    (selectedSubscriptionPlan: any) =>
      dispatch({
        type: 'SELECT_SUBSCRIPTION_PLAN',
        selectedSubscriptionPlan
      }),
    []
  )

  return {
    ...state,
    selectSize,
    selectPurchaseOption,
    selectSubscriptionPlan
  }
}

export default useProduct
