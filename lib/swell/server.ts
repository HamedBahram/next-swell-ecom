import 'server-only'

import swell from 'swell-node'

const storeId = process.env.NEXT_PUBLIC_SWELL_STORE_ID
const secretKey = process.env.SWELL_SECRET_KEY

if (!storeId || !secretKey) {
  throw new Error('Swell store ID or Secret key is missing.')
}

const options = {
  useCamelCase: true
}

swell.init(storeId, secretKey, options)

export default swell
