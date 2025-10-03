import { Input } from '@/components/ui/input'
import { RippleButton } from '@/components/ui/shadcn-io/ripple-button'
import { Textarea } from '@/components/ui/textarea'

export function ContactForm() {
  return (
    <div className="space-y-2">
      <h1 className="font-bold">Send us a message</h1>
      <Input type="text" placeholder="Your name" className="h-12" />
      <Input type="text" placeholder="Phone number" className="h-12" />
      <Input type="text" placeholder="Email" className="h-12" />
      <Textarea placeholder="Message" rows={7} />
      <div className="flex justify-end">
        <RippleButton>Submit</RippleButton>
      </div>
    </div>
  )
}
