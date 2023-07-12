import { formatCurrency, getPlanFrequency } from '@/lib/utils'
import { motion } from 'framer-motion'
import SaleBadge from './SaleBadge'
import { ExtendedProduct } from '@/lib/types'
import { useTheme } from 'next-themes'

type ProductDetailsProp = {
  product: ExtendedProduct
  totalPrice: number
  totalOriginalPrice: number
  selectedPurchaseOption: any
  selectedSubscriptionPlan: any
}

const ProductDetails = ({
  product,
  totalPrice,
  totalOriginalPrice,
  selectedPurchaseOption,
  selectedSubscriptionPlan
}: ProductDetailsProp) => {
  const { resolvedTheme } = useTheme()

  return (
    <div className='lg:max-w-xl'>
      <div className='mt-4'>
        {product.sale && (
          <div className='mb-1'>
            <SaleBadge />
          </div>
        )}
        <h1 className='text-3xl font-bold tracking-tight sm:text-4xl'>
          {product.name}
        </h1>
      </div>

      <section aria-labelledby='information-heading' className='mt-4'>
        <h2 id='information-heading' className='sr-only'>
          Product information
        </h2>

        <div
          className='mt-6 space-y-6 text-base text-stone-500'
          dangerouslySetInnerHTML={{ __html: product?.description || '' }}
        ></div>

        <motion.div
          key={totalPrice}
          initial={{
            backgroundColor: resolvedTheme === 'dark' ? '#17171700' : '#fff'
          }}
          animate={{
            backgroundColor:
              resolvedTheme === 'dark'
                ? ['#292524', '#17171700']
                : ['#e5e5e577', '#fff']
          }}
          transition={{ duration: 0.6, ease: 'backInOut' }}
          className='-mx-3 -my-1 mt-6 flex w-max flex-col px-3 py-1'
        >
          <p className='text-lg font-medium sm:text-2xl'>
            <span>{formatCurrency({ amount: totalPrice })}</span>
            {selectedPurchaseOption?.id === 'subscription' && (
              <span className='text-sm font-normal text-stone-400'>{` / every ${getPlanFrequency(
                selectedSubscriptionPlan
              )}`}</span>
            )}
          </p>
          {product?.sale && selectedPurchaseOption?.id === 'standard' && (
            <p className='text-stone-400 line-through'>
              {formatCurrency({ amount: totalOriginalPrice })}
            </p>
          )}
        </motion.div>
      </section>
    </div>
  )
}

export default ProductDetails
