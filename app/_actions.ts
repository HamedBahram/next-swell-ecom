'use server'

import { currentUser } from '@clerk/nextjs'
import swell from '@/lib/swell/server'

export async function generateToken() {
  const user = await currentUser()

  if (!user) {
    return { success: false, error: 'Not authorized' }
  }

  const emails = user.emailAddresses
  const primaryEmailId = user.primaryEmailAddressId
  const email = emails.find(email => email.id === primaryEmailId)
  const emailAddress = email?.emailAddress

  if (!emailAddress) {
    return { success: false, error: 'User email not found.' }
  }

  const { password_token } = await swell.put(`/accounts/${emailAddress}`, {
    password_token: null
  })

  return { success: true, token: password_token }
}
