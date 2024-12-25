import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/solat-notes/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/salah-notes/"!</div>
}
