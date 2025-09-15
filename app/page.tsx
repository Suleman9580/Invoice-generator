"use client"

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React, { JSX, useEffect, useRef } from 'react'
import { Github, Activity, BarChart2, Filter, User } from "@deemlol/next-icons";
import gsap from 'gsap'

import Analytics from '@/components/ui/Analytics';


type AnalyticsItem = {
  logo: React.ReactNode | string;
  numbers: number | string;
  data: string;
};




export default function Page(): JSX.Element {

  const cursorRef = useRef<HTMLDivElement | null>(null)

  const analyticsData: AnalyticsItem[] = [
    {
      logo: <BarChart2 size={30} color="#FFFFFF" />,
      numbers: 117,
      data: "Unique visits per day"
    },
    {
      logo: <Activity size={30} color="#FFFFFF" />,
      numbers: 222,
      data: "Daily active users"
    },
    {
      logo: <Filter size={30} color="#FFFFFF" />,
      numbers: 1234,
      data: "Invoices Generated so far"
    },
    {
      logo: <User size={30} color="#FFFFFF" />,
      numbers: 123,
      data: "Subscribed Users"
    }
  ]


  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    // Move cursor smoothly
    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.70,
        ease: "power2",
      })
    }

    // Enlarge on hover
    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 2,
        // backgroundColor: "mix-blend-difference", // Tailwind rose-500
        duration: 0.70,
      })
    }

    // Shrink back
    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        // backgroundColor: "mix-blend-difference", // Tailwind blue-500
        duration: 0.70,
      })
    }

    // Attach global mousemove
    window.addEventListener("mousemove", moveCursor)

    // Attach hover effects on interactive elements
    const interactiveElements = document.querySelectorAll("a, button")
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", moveCursor)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <div className='min-h-[100vh] dark bg-background text-foreground relative  '>
      <div
        ref={cursorRef}
        className="fixed top-0 -translate-[50%] left-0 w-6 h-6 bg-zinc-300 mix-blend-difference rounded-full pointer-events-none z-50"
      />

     

      <div className="min-h-screen px-4 max-w-4xl mx-auto border relative ">

        <Image
        src="/invoice_bg.jpg"
        alt="Background"
        fill
        priority
        className=" object-cover object-center inset-0 z-0"
      />

      


        <nav className='py-4 flex justify-between items-center relative border-b-2 z-10'>
          <Link href="/" >Invoicer</Link>
          <div className='flex items-center gap-4'>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact-Us</Link>
            <Button asChild>
              <Link href="/home">Get Your First Invoice</Link>
            </Button>
          </div>
        </nav>

        <div className='w-full min-h-full flex justify-between items-start mt-30 relative z-10 '>
          <div className=''>
            <p className='font-bold text-5xl leading-10 text-zinc-200'>Invoicer,<br /> <span className='text-4xl'>A platform to generate <br />  high quality Invoices.</span></p>
            <p className='font-base mt-2 text-zinc-500'>Simple Invoice generator with fast, secure and reliable invoice pdfs.</p>
            <div className='flex mt-6 gap-4 items-center'>
              <Button className='' asChild>
                <Link href="/home">Get Your First Invoice</Link>
              </Button>
              <Link href='https://github.com/Suleman9580/Invoice-generator' target='_blank'>
                <Github size={24} color="#FFFFFF" />
              </Link>
            </div>
          </div>
          <Image width={300} height={300} className='-mt-10' alt='invoice_img' src="/invoice_img.png" />
        </div>

        <div className=' w-full h-[10vw] grid-cols-4 grid gap-2 grid-rows-1 mt-20 relative z-10 '>
          {analyticsData.map((item, index) =>
            <Analytics key={index} logo={item.logo} numbers={item.numbers} data={item.data} />
          )}
        </div>
      </div >
    </div >
  )
}

