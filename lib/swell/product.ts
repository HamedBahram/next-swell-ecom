import swell from '@/lib/swell/client'
import { GetProductsInput } from '@/lib/types'
import { PRODUCTS_PER_PAGE, CATEGORIES_PER_PAGE } from '@/lib/utils/constants'
import { cache } from 'react'

export const getProducts = cache(
  async ({
    page = 1,
    sort = '',
    search = '',
    categories = [],
    limit = PRODUCTS_PER_PAGE
  }: GetProductsInput) => {
    const query = {
      page,
      limit,
      sort,
      search,
      categories,
      expand: ['variants', 'categories']
    }

    return await swell.products.list(query)
  }
)

export const getProductBySlugOrId = cache(async (slugOrId: string) => {
  return await swell.products.get(slugOrId)
})

export const listCategories = cache(
  async (limit = CATEGORIES_PER_PAGE, page = 1) => {
    return await swell.categories.list({
      limit,
      page,
      expand: ['products']
    })
  }
)

export const sortOptions = [
  { label: 'Latest', value: 'latest' },
  { label: 'Trending', value: 'trending' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' }
]

export const sortMap = new Map([
  ['latest', ''],
  ['price-asc', 'price asc'],
  ['price-desc', 'price desc'],
  ['trending', 'popularity']
])
