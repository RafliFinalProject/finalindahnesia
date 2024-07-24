'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

function Logo() {
  const router = useRouter()

  return <Image
    onClick={() => router.push('/')}
    alt='logo'
    className='hidden md:block cursor-pointer'
    height='100'
    width='100'
    src='https://res.cloudinary.com/du0tsletf/image/upload/v1719337472/Default_Create_a_stunning_logo_featuring_the_text_Indahnesia_w_3-removebg-preview_npvbuq.png'
  />
}

export default Logo
