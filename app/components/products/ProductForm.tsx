import { useCart } from '@/lib/context/CartProvider'
import { motion, AnimatePresence } from 'framer-motion'

import RadioBoxes from '@/components/products/RadioBoxes'
import RadioButtons from '@/components/products/RadioButtons'

import { QuestionMarkCircleIcon } from '@heroicons/react/20/solid'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { ExtendedProduct } from '@/lib/types'
import useProduct from '@/lib/hooks/useProduct'
import { FormEvent } from 'react'

type ProductFormProps = { product: ExtendedProduct } & ReturnType<
  typeof useProduct
>

const ProductForm = ({
  product,
  sizeOptions,
  selectedSize,
  purchaseOptions,
  selectedPurchaseOption,
  subscriptionPlans,
  selectedSubscriptionPlan,
  selectSize,
  selectPurchaseOption,
  selectSubscriptionPlan
}: ProductFormProps) => {
  const { loading, addItem } = useCart()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const productId = product.id
    if (!productId) return

    const productData = {
      productId,
      quantity: 1,
      ...(selectedSize && {
        options: [
          {
            name: 'Size',
            value: selectedSize.name,
            shipment_weight: selectedSize.shipment_weight || 0,
            shipmentWeight: selectedSize.shipment_weight || 0
          }
        ]
      }),
      ...(selectedPurchaseOption?.id === 'subscription' && {
        purchaseOption: {
          type: selectedPurchaseOption.id,
          planId: selectedSubscriptionPlan.id
        }
      })
    }

    addItem(productData)
  }

  return (
    <div className='mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start'>
      <section aria-labelledby='options-heading'>
        <h2 id='options-heading' className='sr-only'>
          Product options
        </h2>

        <form onSubmit={handleSubmit}>
          <div className='flex flex-col'>
            {/* Size Options */}
            {sizeOptions && sizeOptions.length > 0 && (
              <div>
                <RadioBoxes
                  label='Size'
                  options={sizeOptions}
                  selected={selectedSize}
                  setSelected={(value: any) => selectSize(value)}
                />
                <div className='ml-1 mt-1'>
                  <a
                    href='#'
                    className='group inline-flex items-center text-[12px] text-stone-500 hover:text-stone-700'
                  >
                    <span>What size should I buy?</span>
                    <QuestionMarkCircleIcon
                      className='ml-2 h-4 w-4 flex-shrink-0 text-stone-400 group-hover:text-stone-500'
                      aria-hidden='true'
                    />
                  </a>
                </div>
              </div>
            )}

            {/* Purchase Options */}
            {purchaseOptions && purchaseOptions.length > 0 && (
              <RadioButtons
                label='Purchase Options'
                options={purchaseOptions}
                selected={selectedPurchaseOption}
                setSelected={selectPurchaseOption}
              />
            )}

            {/* Subscription Plans */}
            <AnimatePresence>
              {selectedPurchaseOption?.id === 'subscription' &&
                subscriptionPlans &&
                subscriptionPlans?.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <RadioBoxes
                      label='Subscription Plans'
                      selectedSize={selectedSize}
                      options={subscriptionPlans}
                      selected={selectedSubscriptionPlan}
                      setSelected={(value: any) =>
                        selectSubscriptionPlan(value)
                      }
                    />
                  </motion.div>
                )}
            </AnimatePresence>
          </div>

          <div className='mt-10'>
            <button
              type='submit'
              disabled={loading}
              className='flex h-12 w-full items-center justify-center gap-6 rounded-md border border-transparent bg-sky-600 px-8 py-3 text-base font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-stone-50 disabled:cursor-not-allowed disabled:opacity-75'
            >
              {loading ? (
                <span>Loading...</span>
              ) : (
                <>
                  <span>Add to Cart</span>
                  <ShoppingCartIcon className='h-5 w-5' />
                </>
              )}
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default ProductForm
