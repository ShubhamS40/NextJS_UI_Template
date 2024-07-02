'use client'
import React from 'react'
import { HoverEffect } from "@/components/ui/card-hover-effect";

 const projects:Array<{title:String,description:String,link:String}> = [
    {
      title: "Stripe",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "Netflix",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      title: "Google",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      title: "Meta",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
    },
    {
      title: "Amazon",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
  ];
function HoverCard() {
  return (
    <div className='h-[40rem] py-5 sm:py-0 sm:flex-col sm:flex items-center justify-end'>
        <div className='text-center text-4xl font-bold'>
            <h1>Hover Card</h1>
        </div>
      <div className='px-5'>
      <HoverEffect  items={projects}/>  
      </div>
    </div>
  )
}

export default HoverCard





