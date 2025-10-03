import { buildRequest, buildUrl } from '@/lib/helpers'

async function getProducts() {
  const requestOptions = buildRequest('GET')
  const url = buildUrl('/content/items/Product')
  const response = await fetch(url, requestOptions)
  return await response.json()
}

export const ApiService = {
  getProducts,
}
