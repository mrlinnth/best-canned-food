import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { createFileRoute } from '@tanstack/react-router'
import { Check, Gift } from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/checkout')({
  component: Checkout,
})

function Checkout() {
  const [selectedPayment, setSelectedPayment] = useState('card')
  const [formData, setFormData] = useState({
    cardName: 'John Cena',
    cardNumber: '1234 5678 9012 3456',
    expiryDate: '09/27',
    cvc: '123',
    agreeTerms: true,
  })

  const paymentMethods = [
    {
      id: 'card',
      name: 'Credit/Debit Card',
      logos: ['Visa', 'Mastercard'],
      component: 'card',
    },
    {
      id: 'kbzpay',
      name: 'KBZPay',
      logos: ['KBZPay'],
      component: 'external',
    },
    {
      id: 'wave',
      name: 'Wave',
      logos: ['Wave'],
      component: 'external',
    },
    {
      id: 'ayapay',
      name: 'AYA Pay',
      logos: ['AYA Pay'],
      component: 'external',
    },
    {
      id: 'cbpay',
      name: 'CB Pay',
      logos: ['CB Pay'],
      component: 'external',
    },
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="p-4 md:p-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Payment Method Section */}
          <div className="space-y-6">
            <h2 className="text-foreground text-2xl font-semibold">
              Payment Method
            </h2>

            <div className="space-y-4">
              {paymentMethods.map((method) => (
                <Card
                  key={method.id}
                  className={`cursor-pointer transition-all duration-200 ${
                    selectedPayment === method.id
                      ? 'ring-primary border-primary/20 ring-2'
                      : 'hover:border-muted-foreground/20'
                  }`}
                  onClick={() => setSelectedPayment(method.id)}
                >
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                            selectedPayment === method.id
                              ? 'border-primary bg-primary'
                              : 'border-muted-foreground'
                          }`}
                        >
                          {selectedPayment === method.id && (
                            <div className="bg-primary-foreground h-2 w-2 rounded-full"></div>
                          )}
                        </div>
                        <span className="text-foreground font-medium">
                          {method.name}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {method.logos.map((logo) => (
                          <div
                            key={logo}
                            className="bg-muted text-muted-foreground rounded px-2 py-1 text-xs font-semibold"
                          >
                            {logo}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card Form */}
                    {selectedPayment === 'card' && method.id === 'card' && (
                      <div className="mt-6 space-y-4">
                        <div>
                          <Label
                            htmlFor="cardName"
                            className="text-foreground text-sm font-medium"
                          >
                            Name on Card{' '}
                            <span className="text-muted-foreground">
                              *Required
                            </span>
                          </Label>
                          <Input
                            id="cardName"
                            value={formData.cardName}
                            onChange={(e) =>
                              handleInputChange('cardName', e.target.value)
                            }
                            className="mt-1"
                            placeholder="John"
                          />
                        </div>

                        <div>
                          <Label
                            htmlFor="cardNumber"
                            className="text-foreground text-sm font-medium"
                          >
                            Card Number{' '}
                            <span className="text-muted-foreground">
                              *Required
                            </span>
                          </Label>
                          <Input
                            id="cardNumber"
                            value={formData.cardNumber}
                            onChange={(e) =>
                              handleInputChange('cardNumber', e.target.value)
                            }
                            className="mt-1"
                            placeholder="1234 5678 9012 3456"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label
                              htmlFor="expiryDate"
                              className="text-foreground text-sm font-medium"
                            >
                              Expiry Date{' '}
                              <span className="text-muted-foreground">
                                *Required
                              </span>
                            </Label>
                            <Input
                              id="expiryDate"
                              value={formData.expiryDate}
                              onChange={(e) =>
                                handleInputChange('expiryDate', e.target.value)
                              }
                              className="mt-1"
                              placeholder="09/27"
                            />
                          </div>
                          <div>
                            <Label
                              htmlFor="cvc"
                              className="text-foreground text-sm font-medium"
                            >
                              CVC/CVV{' '}
                              <span className="text-muted-foreground">
                                *Required
                              </span>
                            </Label>
                            <Input
                              id="cvc"
                              value={formData.cvc}
                              onChange={(e) =>
                                handleInputChange('cvc', e.target.value)
                              }
                              className="ring-primary/20 border-primary/30 mt-1 ring-2"
                              placeholder="123"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Order Details Section */}
          <div className="space-y-6">
            <h2 className="text-foreground text-2xl font-semibold">
              Order Details
            </h2>

            {/* Course Card */}
            <Card>
              <CardContent>
                <div className="flex space-x-4">
                  <img
                    src="https://bestpremiumcannedfood.com/wp-content/uploads/2022/01/019-900x900.jpg"
                    alt="ချဥ်ပေါင်ကြော်"
                    className="h-16 w-20 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-foreground text-lg font-semibold">
                      ချဥ်ပေါင်ကြော်
                    </h3>
                    <p className="text-foreground mt-1 text-xl font-semibold">
                      MMK 2400
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Discount Section */}
            <Card>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Gift className="text-muted-foreground h-5 w-5" />
                    <span className="text-foreground font-medium">TENOFF</span>
                  </div>
                  <div className="bg-primary flex h-6 w-6 items-center justify-center rounded-full">
                    <Check className="text-primary-foreground h-4 w-4" />
                  </div>
                </div>
                <p className="text-primary mt-2 text-sm">
                  Yay, you got MMK 10 discount!
                </p>
              </CardContent>
            </Card>

            {/* Price Breakdown */}
            <Card>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-foreground">Price</span>
                  <span className="text-foreground">MMK 2400</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground">Discount</span>
                  <span className="text-foreground">-MMK 10</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between text-lg font-semibold">
                  <span className="text-foreground">Total</span>
                  <span className="text-foreground">MMK 2390</span>
                </div>
              </CardContent>
            </Card>

            {/* Terms and Checkout */}
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreeTerms}
                  onCheckedChange={(checked) =>
                    setFormData((prev) => ({
                      ...prev,
                      agreeTerms: checked === true,
                    }))
                  }
                  className="mt-1"
                />
                <Label
                  htmlFor="terms"
                  className="text-foreground text-sm leading-5"
                >
                  By clicking this you are agree to our
                </Label>
              </div>
              <div className="text-foreground text-sm leading-5 flex gap-2 ml-6">
                <a href="#" className="text-primary hover:underline">
                  Terms of Services
                </a>
                <p>and</p>
                <a href="#" className="text-primary hover:underline">
                  Privacy Policy
                </a>
              </div>
              <Button
                size="lg"
                className="w-full"
                disabled={!formData.agreeTerms}
              >
                Checkout Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
