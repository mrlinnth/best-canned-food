'use client'

import { ArrowLeft } from 'lucide-react'
import { useState } from 'react'

import { CartItem } from '@/components/cart/cart-item'
import { CouponSection } from '@/components/cart/coupon-section'
import { OrderSummary } from '@/components/cart/order-summary'
import { ShippingAddress } from '@/components/shipping-address'
import { Button } from '@/components/ui/button'
import { createFileRoute, Link } from '@tanstack/react-router'

const cartData = [
  {
    id: '1',
    name: 'ချဥ်ပေါင်ကြော်',
    price: 2400,
    quantity: 1,
    image:
      'http://20.198.168.188:8080/:best/storage/uploads//2025/10/03/best-food-3_uid_68df44b02ee88.jpg',
  },
  {
    id: '2',
    name: 'အာပူလျှာပူအနှစ်',
    price: 3300,
    quantity: 1,
    image:
      'http://20.198.168.188:8080/:best/storage/uploads//2025/10/03/best-food-1_uid_68df44b029847.jpg',
  },
]

export type CartItemType = (typeof cartData)[number]

export const Route = createFileRoute('/cart')({
  component: Cart,
})

function Cart() {
  const [cartItems, setCartItems] = useState<CartItemType[]>(cartData)

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity } : item)),
    )
  }

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const handleApplyCoupon = (code: string) => {
    console.log('Applying coupon:', code)
    // Implement coupon logic here
  }

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  )
  const discount = 0
  const delivery = 0
  const tax = 0

  return (
    <div className="bg-background min-h-screen p-4 lg:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Shopping Cart Section */}
          <div className="lg:col-span-2">
            <div className="">
              <h1 className="mb-6 text-2xl font-semibold">Shopping Cart</h1>
              {/* Cart Items */}
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    {...item}
                    onUpdateQuantity={updateQuantity}
                    onRemove={removeItem}
                  />
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
              <Button
                variant="destructive"
                className="bg-destructive hover:bg-destructive/90"
              >
                Cancel Order
              </Button>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            <CouponSection onApplyCoupon={handleApplyCoupon} />
            <ShippingAddress />
            <OrderSummary
              subtotal={subtotal}
              discount={discount}
              delivery={delivery}
              tax={tax}
            />
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 w-full"
              asChild
            >
              <Link to="/checkout">Check Out</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
