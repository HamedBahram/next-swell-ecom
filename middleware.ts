import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  publicRoutes: ['/((?!dashboard).*)']
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api)(.*)']
}
