import { getProducts, listCategories, sortMap } from '@/lib/swell/products'
import Products from '@/components/products/Products'

const Page = async ({
  params,
  searchParams
}: {
  params: { slug: string }
  searchParams: { sort?: string }
}) => {
  const { slug } = params
  const { sort } = searchParams
  const mappedSort = sort ? sortMap.get(sort) : ''

  const { results: products } = await getProducts({
    page: 1,
    sort: mappedSort,
    categories: [slug]
  })

  const { results: categories } = await listCategories()

  return <Products products={products} categories={categories} />
}

export default Page
