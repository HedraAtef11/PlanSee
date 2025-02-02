"use client"

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const partnerLogos = [
  "https://i.ibb.co/YTfd7TjW/image.jpg",
  "https://i.ibb.co/ymvqBJYG/image.jpg",
  "https://i.ibb.co/SXr9cT9X/image.jpg",
  "https://i.ibb.co/VWFbhwwL/image.jpg",
  "https://i.ibb.co/7xRPz4ND/image.jpg",
  "https://i.ibb.co/YFwQCKDb/image.jpg",
  "https://i.ibb.co/Kp4r7YKw/image.jpg",
  "https://i.ibb.co/0j4r8gzS/image.jpg",
  "https://i.ibb.co/KcTkwct1/image.jpg",
  "https://i.ibb.co/672PhNP8/image.jpg",
  "https://i.ibb.co/Q77VF7WW/image.jpg",
  "https://i.ibb.co/PsZ1bR50/image.jpg",
  "https://i.ibb.co/s90Sn8gq/image.jpg",
  "https://i.ibb.co/R10yhhG/image.jpg",
  "https://i.ibb.co/qLZtvc4G/image.jpg",
  "https://i.ibb.co/35Brw3pG/image.jpg",
  "https://i.ibb.co/XZ27235F/image.jpg",
  "https://i.ibb.co/4wwnz4zX/image.jpg",
  "https://i.ibb.co/qYJdFCMZ/image.jpg",
  "https://i.ibb.co/sdn3ZRdw/image.jpg",
  "https://i.ibb.co/TBjXg5yW/image.jpg",
  "https://i.ibb.co/whRC9XMy/image.jpg",
  "https://i.ibb.co/Fqx76xJ5/image.jpg",
  "https://i.ibb.co/4gNn1PgL/image.jpg",
  "https://i.ibb.co/mVr4gbBB/image.jpg",
  "https://i.ibb.co/6cLCt5QP/image.jpg",
  "https://i.ibb.co/svCTfQG1/image.jpg",
  "https://i.ibb.co/4RvzRrdg/image.jpg",
  "https://i.ibb.co/vvYfLh2X/image.jpg",
  "https://i.ibb.co/mFrBm90D/image.jpg"
]

export function SuccessPartners() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: false,
    dragFree: true,
    containScroll: 'trimSnaps',
    autoplay: {
      delay: 4000,
      stopOnInteraction: true,
    },
  })

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const [selectedIndex, setSelectedIndex] = React.useState(0)

  React.useEffect(() => {
    if (!emblaApi) return

    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    })
  }, [emblaApi])

  return (
    <section className="section-padding">
      <div className="container-width">
        <h2 className="text-3xl font-bold text-center mb-12">Success Partners</h2>
        
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex"
            onClick={scrollNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {partnerLogos.map((logo, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex-[0_0_50%] min-w-0 pl-4 md:flex-[0_0_33.333%] lg:flex-[0_0_20%]",
                    "group relative"
                  )}
                >
                  <div className="aspect-[3/2] flex items-center justify-center">
                    <img
                      src={logo}
                      alt={`Partner logo ${index + 1}`}
                      className="max-w-[200px] w-full object-contain transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: Math.ceil(partnerLogos.length / 5) }).map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  selectedIndex === index ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"
                )}
                onClick={() => emblaApi?.scrollTo(index * 5)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}