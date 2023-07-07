'use client'

import { useEffect, useState } from 'react'

import ProductDetails from '@/components/products/ProductDetails'
import ProductImage from '@/components/products/ProductImage'
import ProductForm from '@/components/products/ProductForm'

import Breadcrumbs from '@/components/ui/Breadcrumbs'
import useProduct from '@/lib/hooks/useProduct'
import { useRouter } from 'next/navigation'

import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { ExtendedProduct } from '@/lib/types'

const Product = ({ product }: { product: ExtendedProduct }) => {
  const router = useRouter()
  const {
    price,
    basePrice,
    originalPrice,
    sizeOptions,
    selectedSize,
    purchaseOptions,
    selectedPurchaseOption,
    subscriptionPlans,
    selectedSubscriptionPlan,
    selectSize,
    selectPurchaseOption,
    selectSubscriptionPlan
  } = useProduct({ product })

  const [totalPrice, setTotalPrice] = useState(0)
  useEffect(() => {
    setTotalPrice((basePrice || 0) + (selectedSize?.price || 0))
  }, [basePrice, selectedSize])

  const [totalOriginalPrice, setTotalOriginalPrice] = useState(0)
  useEffect(() => {
    if (!product.sale) return
    setTotalOriginalPrice((originalPrice || 0) + (selectedSize?.price || 0))
  }, [product, originalPrice, selectedSize])

  return (
    <section className='py-24'>
      <div className='container'>
        <button
          className='-mt-10 mb-10 flex items-center gap-2 text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
          onClick={() => router.back()}
        >
          <ArrowLeftIcon className='h-4 w-5' />
          <span className='text-[12px] font-medium uppercase'>Go Back</span>
        </button>
        <Breadcrumbs />
        <div className='flex flex-col gap-8 lg:flex-row-reverse'>
          <ProductImage images={product.images} />
          <div className='flex-1'>
            <ProductDetails
              product={product}
              totalPrice={totalPrice}
              totalOriginalPrice={totalOriginalPrice}
              selectedPurchaseOption={selectedPurchaseOption}
              selectedSubscriptionPlan={selectedSubscriptionPlan}
            />
            <ProductForm
              product={product}
              price={price}
              basePrice={basePrice}
              originalPrice={originalPrice}
              sizeOptions={sizeOptions}
              selectedSize={selectedSize}
              purchaseOptions={purchaseOptions}
              selectedPurchaseOption={selectedPurchaseOption}
              subscriptionPlans={subscriptionPlans}
              selectedSubscriptionPlan={selectedSubscriptionPlan}
              selectSize={selectSize}
              selectPurchaseOption={selectPurchaseOption}
              selectSubscriptionPlan={selectSubscriptionPlan}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product
