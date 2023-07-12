import { getProductBySlugOrId } from '@/lib/swell/product'
import Product from '@/app/components/products/Product'

const Page = async ({ params }: { params: { slug: string } }) => {
  const product = await getProductBySlugOrId(params.slug)

  return <Product product={product} />
}

export default Page
