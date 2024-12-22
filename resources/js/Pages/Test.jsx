import { Head } from '@inertiajs/react'
import { Link } from '@inertiajs/react'
export default function Welcome({ user }) {
  return (
    <>
      <Head title="Welcome" />
      <h1>Welcome</h1>
      <p>Hello test, welcome to your first Inertia app!</p>
      <Link href="/test-1">Test 1</Link>
    </>
  )
}