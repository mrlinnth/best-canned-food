import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'

export function NotFound() {
  return (
    <section className="h-screen space-y-4 flex flex-col justify-center items-center">
      <h2 className="heading">
        <span className="text-primary text-9xl">404</span>
      </h2>
      <p className="text-xl text-muted-foreground">Page Not Found</p>
      <Button asChild>
        <Link to="/">Return</Link>
      </Button>
    </section>
  )
}
