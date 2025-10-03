import { AlertError } from '@/components/alert-error'
import { Hero } from '@/components/hero'
import { Loading } from '@/components/loading'
import { ProductGrid } from '@/components/product-grid'
import { ApiService } from '@/lib/ApiService'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: async () => ApiService.getProducts(),
  })

  if (isLoading) return <Loading />

  if (error) return <AlertError />

  return (
    data && (
      <>
        {/* https://github.com/tailwindtoolbox/Nordic-Store */}
        <Hero />
        <ProductGrid title="Featured Products" products={data} />
      </>
    )
  )
}
