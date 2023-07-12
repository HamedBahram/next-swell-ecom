/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx'
import { Tab } from '@headlessui/react'
import { Image } from 'swell-js'

const ProductImage = ({ images }: { images: Image[] | undefined }) => {
  return (
    <Tab.Group
      as='div'
      className='mt-6 flex flex-1 flex-col-reverse lg:mt-0 lg:self-start'
    >
      <div className='mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none'>
        <Tab.List className='grid grid-cols-4 gap-6'>
          {images?.map(image => (
            <Tab
              key={image.id}
              className='relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-sky-500 focus:ring-opacity-50 focus:ring-offset-4'
            >
              {({ selected }) => (
                <>
                  <span className='absolute inset-0 overflow-hidden rounded-md'>
                    <img
                      src={image.file?.url}
                      alt=''
                      className='h-full w-full object-cover object-center'
                    />
                  </span>
                  <span
                    className={clsx(
                      selected ? 'ring-sky-500' : 'ring-transparent',
                      'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
                    )}
                    aria-hidden='true'
                  />
                </>
              )}
            </Tab>
          ))}
        </Tab.List>
      </div>

      <Tab.Panels className='aspect-h-3 aspect-w-4 w-full'>
        {images?.map(image => (
          <Tab.Panel key={image.id}>
            <img
              src={image.file?.url}
              alt='product image'
              className='h-full w-full rounded-lg object-cover object-center'
            />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

export default ProductImage
