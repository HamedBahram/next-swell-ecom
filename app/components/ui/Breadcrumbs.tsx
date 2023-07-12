import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { capitalize } from '@/lib/utils'

const Breadcrumbs = () => {
  const pathname = usePathname()
  const paths = pathname?.split('/').filter(Boolean)
  const breadcrumbs =
    paths.map((path, index) => ({
      href: '/' + paths.slice(0, index + 1).join('/'),
      title: capitalize(path)
    })) || []

  return (
    <nav aria-label='Breadcrumb'>
      <ol role='list' className='flex items-center space-x-2'>
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.title}>
            <div className='flex items-center text-sm'>
              <Link
                href={breadcrumb.href}
                className='font-medium text-stone-500 hover:text-stone-900 dark:hover:text-stone-200'
              >
                {breadcrumb.title}
              </Link>
              {index !== breadcrumbs.length - 1 ? (
                <svg
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  aria-hidden='true'
                  className='ml-2 h-5 w-5 flex-shrink-0 text-stone-300'
                >
                  <path d='M5.555 17.776l8-16 .894.448-8 16-.894-.448z' />
                </svg>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
