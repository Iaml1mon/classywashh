import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <p className="text-gray-600 mb-6">Page not found</p>
      <Link href="/" className="underline text-blue-600 hover:text-blue-800">
        Back to home
      </Link>
    </div>
  )
}
