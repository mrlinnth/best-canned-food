import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

export function ShippingAddress() {
  return (
    <div className="bg-card border-cart-border rounded-lg border p-6 space-y-2">
      <h1 className="font-bold">Delivery Address</h1>
      <Input type="text" placeholder="Your name" className="h-12" />
      <Input type="text" placeholder="Phone number" className="h-12" />
      <Select>
        <SelectTrigger className="w-full h-12">
          <SelectValue placeholder="Select a township" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Townships</SelectLabel>
            <SelectItem value="apple">Ahlone</SelectItem>
            <SelectItem value="pineapple">Dagon</SelectItem>
            <SelectItem value="banana">Kyi Myin Dine</SelectItem>
            <SelectItem value="grapes">Latha</SelectItem>
            <SelectItem value="blueberry">San Chaung</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Textarea placeholder="Address" rows={7} />
      <Button className="bg-primary hover:bg-primary/90 h-12 w-full">
        Update Address
      </Button>
    </div>
  )
}
