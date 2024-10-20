import React from 'react'
import Image from 'next/image'
import image1 from "@/public/ab.png"
import image2 from "@/public/Infinity+logoL.png"
import image3 from "@/public/alapanaL.png"
import image4 from "@/public/armani+rocaL.png"
import image5 from "@/public/cobertL.png"
import image6 from "@/public/imageL.png"
import image7 from "@/public/prissmacerL.png"

const sponsors = [
  { id: 1, image: image1 },
  { id: 2, image: image2 },
  { id: 3, image: image3 },
  { id: 4, image: image4 },
  { id: 5, image: image5 },
  { id: 6, image: image6 },
  { id: 7, image: image7 },
  { id: 8, image: image1 },
  { id: 9, image: image2 },
  { id: 10, image: image3 },
  { id: 11, image: image4 },
  { id: 12, image: image5 },
  { id: 13, image: image6 },
  { id: 14, image: image7 },
  { id: 15, image: image1 },
  { id: 16, image: image2 },
  { id: 17, image: image3 },
  { id: 18, image: image4 },
]

const Sponsors = () => {
  return (
    <div className="relative overflow-hidden w-full ">
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 7s linear infinite;
        }
      `}</style>
      <div className="flex animate-scroll items-center py-24 md:py-40">
        {[...sponsors, ...sponsors].map((sponsor, index) => (
          <div key={`${sponsor.id}-${index}`} className="flex-shrink-0 mx-5 md:mx-8">
            <Image 
              src={sponsor.image} 
              alt={`Sponsor ${sponsor.id}`} 
              width={90} 
              height={50} 
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sponsors