import Link from 'next/link';
import React from 'react'

function Footer() {
  return (
    <footer className='fixed bottom-0 w-screen h-12 z-10 bg-secondary-light shadow-sm flex justify-center items-center text-sm font-semibold'>
        Built with ❤️ by &nbsp; <Link href="https://josafa.com.br" target={'_blank'} className="font-bold">Josafá Marengo</Link>
    </footer>
  )
}

export default Footer;