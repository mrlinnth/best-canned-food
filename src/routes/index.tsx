import { Hero } from '@/components/hero'
import { ProductGrid } from '@/components/product-grid'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const data = [
    {
      name: 'အာပူလျှာပူအနှစ်',
      price: '3300',
      image:
        'https://bestpremiumcannedfood.com/wp-content/uploads/2022/01/039-900x900.jpg',
    },
    {
      name: 'ငါးပိရည်ကျို',
      price: '2200',
      image:
        'https://bestpremiumcannedfood.com/wp-content/uploads/2022/03/017-900x900.webp',
    },
    {
      name: 'ချဥ်ပေါင်ကြော်',
      price: '2400',
      image:
        'https://bestpremiumcannedfood.com/wp-content/uploads/2022/01/019-900x900.jpg',
    },
    {
      name: 'မရမ်းသီးငါးပိချက်',
      price: '2700',
      image:
        'https://bestpremiumcannedfood.com/wp-content/uploads/2022/03/031-900x900.webp',
    },
  ]

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
