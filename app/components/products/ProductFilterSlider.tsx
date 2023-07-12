'use client'

import { Dispatch, Fragment, SetStateAction } from 'react'
import NavLink from '@/components/ui/NavLink'

import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const ProductFilterSlider = ({
  show,
  onClose,
  categories
}: {
  show: boolean
  onClose: Dispatch<SetStateAction<boolean>>
  categories: swell.Category[]
}) => {
  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog as='div' className='relative z-40 lg:hidden' onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter='transition-opacity ease-linear duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity ease-linear duration-300'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 z-40 flex'>
          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='translate-x-full'
          >
            <Dialog.Panel className='relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl'>
              <div className='flex items-center justify-between px-4'>
                <h2 className='text-lg font-medium text-stone-900'>Filters</h2>
                <button
                  type='button'
                  className='-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-stone-400'
                  onClick={() => onClose(false)}
                >
                  <span className='sr-only'>Close menu</span>
                  <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>

              {/* Filters */}
              <form className='mt-4 border-t border-stone-200 p-8 font-medium text-stone-700'>
                <NavLink href='/products' className='text-base'>
                  All Categories
                </NavLink>
                <ul role='list' className='mt-4 space-y-4 text-sm'>
                  {categories
                    ?.filter(c => c.parentId === null)
                    .map(category => (
                      <li key={category.name}>
                        <NavLink
                          href={`/products/category/${category.slug}`}
                          className='text-base'
                        >
                          {category.name}
                        </NavLink>
                        <ul className='mt-4 space-y-4 border-l border-stone-300 pl-4 text-sm'>
                          {categories
                            .filter(c => c.parentId === category.id)
                            .map(c => (
                              <li key={c.name}>
                                <NavLink
                                  href={`/products/category/${c.slug}`}
                                  className='text-stone-500'
                                >
                                  {c.name}
                                </NavLink>
                              </li>
                            ))}
                        </ul>
                      </li>
                    ))}
                </ul>
              </form>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default ProductFilterSlider
