import { createLazyFileRoute } from '@tanstack/react-router'
import Example from '../components/pages/example.mdx'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <Example />
    </div>
  )
}
