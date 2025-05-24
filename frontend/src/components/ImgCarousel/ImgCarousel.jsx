'use client';

import { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

export default function ImgCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // Autoplay every 3 seconds
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);

  return (
    <div className="bg-[#FFF0E9] w-screen h-screen overflow-hidden relative">
      <div ref={emblaRef} className="w-full h-full overflow-hidden">
        <div className="flex h-full">
          <div className="flex-shrink-0 w-full h-full">
            <img
              src="/images/dashimg1.jpg"
              alt="Budget"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-shrink-0 w-full h-full">
            <img
              src="/images/dashimg2.jpg"
              alt="Savings"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Optional buttons */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4 z-10">
        <button onClick={scrollPrev} className="px-4 py-2 bg-blue-600 text-white rounded">Prev</button>
        <button onClick={scrollNext} className="px-4 py-2 bg-blue-600 text-white rounded">Next</button>
      </div>
    </div>
  );
}
