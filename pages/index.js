import {ImageCarousel} from "@/components/ImageCarousel/ImageCarousel";
import {useRecoilValue} from "recoil";
import {MagneticButton} from "@/components/MagneticButton/MagneticButton";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon} from "@heroicons/react/24/solid";
import { galleryState } from "@/atoms/selectedGallery";
import {useRef} from "react";

export default function Home() {
      const gallery = useRecoilValue(galleryState)
      const containerRef = useRef(null);


      return (
        <main data-scroll-section className={`h-screen w-screen relative `}>
          <ImageCarousel />
          <div className={'absolute bottom-[25vh] sm:bottom-[10vh] left-0 sm:left-4 h-fit sm:ml-[8%] pl-[2%] font-semibold text-2xl sm:text-[5.5vw] uppercase leading-none '}>
            <motion.h1 layoutId={'title'}> justincrediblemoments </motion.h1>
            <h1> &quot;the portfolio&quot; </h1>
          </div>
          <div className={'absolute top-[8vh] font-medium sm:w-[30vw] w-[80vw]  sm:left-[10%] pl-2 sm:pl-4 2xl:w-[25vw] 2xl:text-3xl whitespace-normal '}>
            <p>Photography is more than just “taking photos”,  but rather a ubiquitous art form, weaving creativity and wizardry into the fabric of our lives to create timeless moments.</p>
              <Link href={gallery.toString()} className={'absolute left-0'}>
                    <MagneticButton> <ArrowRightIcon className={'w-10 h-10 text-black'}/> </MagneticButton>
              </Link>
          </div>
        </main>


  )
}
