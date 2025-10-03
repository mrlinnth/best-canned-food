import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertCircleIcon } from 'lucide-react'

export function AlertError({
  title = 'Error',
  body = 'Please try again.',
}: {
  title?: string
  body?: string
}) {
  return (
    <div className="w-full p-6 flex justify-center">
      <div className="w-full max-w-lg">
        <Alert variant="destructive">
          <AlertCircleIcon />
          <AlertTitle>{title}</AlertTitle>
          <AlertDescription>{body}</AlertDescription>
        </Alert>
      </div>
    </div>
  )
}
