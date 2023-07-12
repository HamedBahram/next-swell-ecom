'use client'

import { useState } from 'react'

import ProductGrid from '@/app/components/products/ProductGrid'
import ProductFilterSlider from '@/components/products/ProductFilterSlider'

import { FunnelIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import SortDropdownMenu from './SortDropdownMenu'
import NavLink from '../ui/NavLink'
import { Product } from 'swell-js'
import { Category } from 'swell-js'

const Products = ({
  products = [],
  categories = []
}: {
  products: Product[]
  categories?: Category[]
}) => {
  const [filterSliderIsOpen, setFilterSliderIsOpen] = useState(false)
  const [showFilters, setShowFilters] = useState(true)

  return (
    <section className='py-24'>
      <div className='container'>
        <ProductFilterSlider
          show={filterSliderIsOpen}
          onClose={setFilterSliderIsOpen}
          categories={categories}
        />

        <div className='flex items-baseline justify-between border-b border-stone-200 pb-6 dark:border-stone-700'>
          <h1 className='text-3xl font-bold tracking-tight'>Products</h1>

          <div className='flex items-center'>
            <SortDropdownMenu />

            {/* Show filters */}
            <button
              type='button'
              onClick={() => setShowFilters(show => !show)}
              className='-m-2 ml-5 hidden p-2 text-stone-400 hover:text-stone-500 sm:ml-7 lg:block'
            >
              <span className='sr-only'>View grid</span>
              <Squares2X2Icon className='h-5 w-5' aria-hidden='true' />
            </button>

            {/* Show product filter slider */}
            <button
              type='button'
              className='-m-2 ml-4 p-2 text-stone-400 hover:text-stone-500 sm:ml-6 lg:hidden'
              onClick={() => setFilterSliderIsOpen(true)}
            >
              <span className='sr-only'>Filters</span>
              <FunnelIcon className='h-5 w-5' aria-hidden='true' />
            </button>
          </div>
        </div>

        <section aria-labelledby='products-heading' className='pb-24 pt-6'>
          <h2 id='products-heading' className='sr-only'>
            Products
          </h2>

          <div className='grid grid-cols-1 gap-10 lg:grid-cols-5'>
            {/* Categories */}
            {showFilters && (
              <form className='hidden font-medium lg:block'>
                <NavLink href='/products' className='text-base'>
                  All Categories
                </NavLink>
                <ul role='list' className='mt-4 space-y-4 text-sm'>
                  {categories
                    ?.filter(c => c.parentId === null)
                    .map(category => (
                      <li key={category.name}>
                        <NavLink
                          href={`/products/category/${category.slug}`}
                          className='text-base'
                        >
                          {category.name}
                        </NavLink>
                        <ul className='mt-4 space-y-4 border-l border-stone-300 pl-4 text-sm dark:border-stone-700'>
                          {categories
                            .filter(c => c.parentId === category.id)
                            .map(c => (
                              <li key={c.name}>
                                <NavLink
                                  href={`/products/category/${c.slug}`}
                                  className='text-stone-500'
                                >
                                  {c.name}
                                </NavLink>
                              </li>
                            ))}
                        </ul>
                      </li>
                    ))}
                </ul>
              </form>
            )}

            {/* Product grid */}
            <div className={showFilters ? 'lg:col-span-4' : 'lg:col-span-5'}>
              <ProductGrid products={products} />
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Products
