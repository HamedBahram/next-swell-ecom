import {
  getProducts,
  listCategories,
  sortMap,
  getProductBySlugOrId
} from '@/lib/swell/product'

import Products from '@/components/products/Products'
import Product from '@/app/components/products/Product'

const Page = async ({
  params,
  searchParams
}: {
  params: { slug?: string[] }
  searchParams: { sort?: string }
}) => {
  const { slug } = params
  const productSlug = slug?.length === 1 && slug[0]
  const categorySlug = slug?.length === 2 && slug[1]

  if (productSlug) {
    const product = await getProductBySlugOrId(productSlug)
    return <Product product={product} />
  }

  const { sort } = searchParams
  const mappedSort = sort ? sortMap.get(sort) : ''

  const { results: products } = await getProducts({
    sort: mappedSort,
    ...(categorySlug ? { categories: [categorySlug] } : {})
  })

  const { results: categories } = await listCategories()

  return <Products products={products} categories={categories} />
}

export default Page
