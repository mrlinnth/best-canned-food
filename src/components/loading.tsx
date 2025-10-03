import { Spinner } from '@/components/ui/shadcn-io/spinner'

export function Loading() {
  return (
    <section className="flex text-muted-foreground text-sm justify-center items-center h-svh">
      <Spinner variant="ellipsis" className="mr-2" /> loading
    </section>
  )
}
