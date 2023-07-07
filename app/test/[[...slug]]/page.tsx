import React from 'react'

const Page = ({ params }: { params: { slug?: string[] } }) => {
  console.log(params)

  return <div>Page</div>
}

export default Page
