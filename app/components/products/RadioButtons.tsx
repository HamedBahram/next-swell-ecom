import clsx from 'clsx'

type RadioButtonsProps = {
  label: string
  options: any[]
  selected: any
  setSelected: any
}

const RadioButtons = ({
  label,
  options = [],
  selected,
  setSelected
}: RadioButtonsProps) => {
  return (
    <div className='mt-10'>
      <label className='text-base font-medium'>{label}</label>
      <fieldset className='mt-4'>
        <legend className='sr-only'>Purchase Options</legend>
        <div className='space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0'>
          {options.map(option => (
            <div key={option.id} className='flex cursor-pointer items-center'>
              <input
                id={option.id}
                name='purchaseOptions'
                type='radio'
                value={option}
                checked={option.id === selected.id}
                onChange={() => setSelected(option)}
                className='h-5 w-5 cursor-pointer border-stone-300 text-sky-600 focus:ring-sky-500'
              />
              <label
                htmlFor={option.id}
                className={clsx(
                  option.id === selected.id
                    ? 'text-stone-800 dark:text-stone-200'
                    : 'text-stone-500',
                  'ml-3 block cursor-pointer text-sm font-medium'
                )}
              >
                {option.name === 'Standard' ? 'One-time' : option.name}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  )
}

export default RadioButtons
