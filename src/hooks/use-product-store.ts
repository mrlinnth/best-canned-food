import type { ProductType } from '@/components/product-detail'
import { create } from 'zustand'

interface ProductStore {
  // State
  initialProducts: ProductType[]
  filteredProducts: ProductType[]
  selectedCategory: string
  selectedBrands: string[]
  searchQuery: string

  // Actions
  setFilteredProducts: (products: ProductType[]) => void
  setSelectedCategory: (category: string) => void
  toggleBrand: (brand: string) => void
  setSearchQuery: (query: string) => void
  applyFilters: () => void
  resetFilter: () => void
}

export const useProductStore = create<ProductStore>((set, get) => ({
  // Initial state
  initialProducts: [],
  filteredProducts: [],
  selectedCategory: 'all',
  selectedBrands: [],
  searchQuery: '',

  // Actions
  setFilteredProducts: (products) => {
    set({ initialProducts: products })
    set({ filteredProducts: products })
  },

  setSelectedCategory: (category) => {
    set({ selectedCategory: category })
    get().applyFilters()
  },

  toggleBrand: (brand) => {
    const { selectedBrands } = get()
    const newBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand]
    set({ selectedBrands: newBrands })
    get().applyFilters()
  },

  setSearchQuery: (query) => {
    set({ searchQuery: query })
    get().applyFilters()
  },

  resetFilter: () => {
    set({ selectedBrands: [] })
    set({ selectedCategory: 'all' })
    set({ searchQuery: '' })
    get().applyFilters()
  },

  applyFilters: () => {
    const {
      initialProducts,
      filteredProducts,
      selectedCategory,
      selectedBrands,
      searchQuery,
    } = get()

    let filtered = filteredProducts

    // Category filter
    if (selectedCategory === 'all') {
      filtered = initialProducts
    } else {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory,
      )
    }

    // Brand filter
    if (selectedBrands.length > 0) {
      filtered = filtered.filter((product) =>
        selectedBrands.includes(product.brand),
      )
    }

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.brand.toLowerCase().includes(query),
      )
    }

    set({ filteredProducts: filtered })
  },
}))
