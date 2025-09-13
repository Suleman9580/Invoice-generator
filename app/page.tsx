import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Github } from "@deemlol/next-icons";

function page() {




  return (
    <div className='min-h-[100vh] dark bg-background text-foreground'>
      <div className='min-h-screen px-4 max-w-4xl mx-auto border'>
        <nav className='py-4 flex justify-between items-center border-b-2'>
          <h1 className='font-medium '>Invoicer</h1>
          <div className='flex items-center gap-4'>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact-Us</Link>
            <Button asChild>
              <Link href="/home">Get Your First Invoice</Link>
            </Button>
          </div>
        </nav>

        <div className='w-full min-h-full flex justify-between items-center  mt-40'>
          <div className=''>
            <p className='font-bold text-5xl leading-10 text-zinc-200'>Invoicer,<br /> <span className='text-4xl'>A platform to generate <br />  high quality Invoices.</span></p>
            <p className='font-base mt-2 text-zinc-500'>Simple Invoice generator with fast, secure and reliable invoice pdfs.</p>
            <div className='flex mt-6 gap-4 items-center'>
              <Button className='' asChild>
                <Link href="/home">Get Your First Invoice</Link>
              </Button>
              <Link href='https://github.com/suleman9580' target='_blank'>
                <Github size={24} color="#FFFFFF" />
              </Link>
            </div>
          </div>
          <Image width={300} height={300} className='mix-blend-difference' alt='invoice_img' src="/invoice_img.png" />
        </div>

      </div>
    </div>
  )
}

export default page