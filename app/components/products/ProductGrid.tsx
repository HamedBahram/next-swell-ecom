import Link from 'next/link'
import Image from 'next/image'

import clsx from 'clsx'
import { formatCurrency } from '@/lib/utils'

import SaleBadge from '@/app/components/products/SaleBadge'
import NoImage from '@/public/images/no-img.png'
import { Product } from 'swell-js'

const ProductGrid = ({ products }: { products: Product[] }) => {
  return (
    <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
      {products?.length === 0 && (
        <h3 className='col-span-2 text-stone-400'>
          There are no products matching the selected category.
        </h3>
      )}
      {products?.map(product => (
        <Link
          key={product.id}
          href={`/products/${product.slug}`}
          className='group relative overflow-hidden rounded-lg'
        >
          <>
            {product.sale && (
              <div className='absolute -top-0.5 left-0 z-10'>
                <SaleBadge />
              </div>
            )}
            <div className='aspect-h-1 aspect-w-1 relative w-full overflow-hidden rounded-lg bg-stone-200'>
              <Image
                src={product.images?.[0]?.file?.url || NoImage}
                alt={product.description || 'product image'}
                className='h-full w-full object-cover object-center transition-opacity group-hover:opacity-75'
                fill
              />
            </div>
            <div className='mx-1 mt-4 flex items-start justify-between gap-4'>
              <h3 className='text-sm text-stone-400'>{product.name}</h3>
              <p
                className={clsx('font-medium', product.sale && 'text-pink-700')}
              >
                {formatCurrency({ amount: product.price })}
              </p>
            </div>
          </>
        </Link>
      ))}
    </div>
  )
}

export default ProductGrid
