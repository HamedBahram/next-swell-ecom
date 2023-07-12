import { Fragment } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

import clsx from 'clsx'
import { sortOptions } from '@/lib/swell/product'

import MenuItem from '@/components/ui/MenuItem'

import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const SortDropdownMenu = () => {
  const pathname = usePathname()

  const searchParams = useSearchParams()
  const sort = searchParams.get('sort')
  const activeSort =
    sortOptions.find(option => option.value === sort)?.value || 'latest'

  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button className='group inline-flex justify-center text-sm font-medium text-stone-500 hover:text-stone-900 dark:hover:text-stone-200'>
          Sort
          <ChevronDownIcon
            className='-mr-1 ml-1 h-5 w-5 flex-shrink-0'
            aria-hidden='true'
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 z-20 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='py-1'>
            {sortOptions.map(option => (
              <Menu.Item key={option.label}>
                {({ active }) => (
                  <MenuItem
                    href={{ pathname, query: { sort: option.value } }}
                    className={clsx(
                      activeSort === option.value
                        ? 'font-medium text-stone-900'
                        : 'text-stone-500',
                      active ? 'bg-stone-100' : '',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    {option.label}
                  </MenuItem>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default SortDropdownMenu
