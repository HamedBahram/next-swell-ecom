'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

import { Menu, Transition } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Products', href: '/products' },
  { name: 'Dashboard', href: '/dashboard' }
]

const MobileNavMenu = () => {
  return (
    <Menu as='div' className='relative sm:hidden'>
      <Menu.Button className='flex items-center justify-center'>
        <Bars3Icon className='h-6 w-6 sm:hidden' aria-hidden='true' />
      </Menu.Button>
      <Transition
        enter='transition duration-150 ease-out'
        enterFrom='transform scale-95 opacity-0'
        enterTo='transform scale-100 opacity-100'
        leave='transition duration-150 ease-out'
        leaveFrom='transform scale-100 opacity-100'
        leaveTo='transform scale-95 opacity-0'
      >
        <Menu.Items className='absolute left-0 mt-1 flex w-72 origin-top-right flex-col rounded-lg bg-stone-800 py-5 text-white shadow-lg focus:outline-none dark:bg-white dark:text-stone-800'>
          <Menu.Button as={Fragment}>
            <Link
              href='/'
              className='px-8 py-2 text-2xl font-bold uppercase tracking-widest'
            >
              CAFE
            </Link>
          </Menu.Button>

          {navigation.map(item => (
            <Menu.Item key={item.name}>
              {({ active }) => (
                <Link
                  href={item.href}
                  className={clsx(
                    active && 'bg-stone-700/50 dark:bg-stone-200',
                    'inline-flex items-center px-8 py-2 text-stone-400 dark:text-stone-500'
                  )}
                >
                  {item.name}
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default MobileNavMenu
