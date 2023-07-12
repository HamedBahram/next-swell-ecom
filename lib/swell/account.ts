import swell from '@/lib/swell/client'

export async function login(email: string, token: string) {
  await swell.account.login(email, {
    password_token: token
  })
  return { success: true }
}

export async function logout() {
  await swell.account.logout()
  return { success: true }
}
