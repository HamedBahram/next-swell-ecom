import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

const UserAvatarButton = () => {
  return (
    <div className='mb-1 ml-3'>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton mode='modal'>
          <button className='rounded border border-stone-400 px-3 py-0.5 transition-colors hover:bg-stone-700 hover:text-white'>
            Sign in
          </button>
        </SignInButton>
      </SignedOut>
    </div>
  )
}

export default UserAvatarButton
