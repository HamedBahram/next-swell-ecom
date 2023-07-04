const Footer = () => {
  return (
    <footer className='z-10 py-10 text-stone-400'>
      <div className='container'>
        <h5 className='text-lg'>
          CAFE CO.{' '}
          <span className='text-sm text-stone-500'>
            &copy; {new Date().getFullYear()}
          </span>
        </h5>
        <div className='text-sm text-stone-400'>
          Developed by{' '}
          <a
            className='text-sky-600'
            href='https://www.hamedbahram.io/'
            rel='noreferrer'
            target='_blank'
          >
            HB
          </a>{' '}
          using{' '}
          <a
            className='text-sky-600'
            href='https://nextjs.org/'
            rel='noreferrer'
            target='_blank'
          >
            NextJs
          </a>{' '}
          and{' '}
          <a
            className='text-sky-600'
            href='https://www.swell.is/'
            rel='noreferrer'
            target='_blank'
          >
            Swell
          </a>
          .
        </div>
      </div>
    </footer>
  )
}

export default Footer
