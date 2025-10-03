'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import * as React from 'react'

export function Hero() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  )

  return (
    <div className="w-full flex justify-center">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          <CarouselItem>
            <div className="relative">
              <img
                className="w-full h-96 object-cover hidden sm:flex"
                src="https://bestpremiumcannedfood.com/wp-content/uploads/2022/01/food-wallpaper-131-1920x1080-1.jpg"
                alt=""
              />
              <div className="top-20 left-20 absolute hidden sm:flex">
                <div className="flex flex-col gap-4">
                  <p className="text-white text-5xl my-4">ဘာကြောင့်ပဲစားစား</p>
                  <p className="text-white text-5xl my-4">
                    အမယ်စုံတဲ့ BEST နဲ့စား
                  </p>
                  <a className="text-xl no-underline text-white" href="#">
                    View products
                  </a>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        {/* <CarouselPrevious className="left-2 " />
        <CarouselNext className="right-2" /> */}
      </Carousel>
    </div>
  )
}
