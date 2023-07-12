import { getProducts, listCategories, sortMap } from '@/lib/swell/product'
import Products from '@/components/products/Products'

const Page = async ({ searchParams }: { searchParams: { sort?: string } }) => {
  const { sort } = searchParams
  const mappedSort = sort ? sortMap.get(sort) : ''

  const { results: products } = await getProducts({ sort: mappedSort })
  const { results: categories } = await listCategories()

  return <Products products={products} categories={categories} />
}

export default Page
