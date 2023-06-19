import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useRef } from "react";
import { CAPTIONS }  from '@/utils/captions'
import Link from "next/link";
import {scrollOptions} from "@/utils/scrollOptions";
import {LocomotiveScrollProvider} from "react-locomotive-scroll";
import {MagneticButton} from "@/components/MagneticButton/MagneticButton";
import {ArrowLeftIcon} from "@heroicons/react/20/solid";

export default function Gallery() {

    const {
        query: { gallery },
    } = useRouter();

    const galleryId = parseInt(gallery);
    const containerRef = useRef(null)

    return(
        <>
            <LocomotiveScrollProvider options={scrollOptions} containerRef={containerRef} watch={[]}>
                <main data-scroll-container className={'bg-[#747066] h-screen relative uppercase'} ref={containerRef}>
                    <motion.h1
                        layoutId={"title"}
                        className={'absolute w-[90vw] h-fit left-[5.5vw] sm:left-[8.5vw] xl:left-[9.5vw] top-[40%] flex items-center justify-center uppercase font-semibold text-[5.25vw] xl:text-[5.5vw] 2xl:text-[5vw] z-10 '}>
                        justincrediblemoments
                    </motion.h1>
                    {/* gallery cover*/}
                    <div data-scroll-section className={'w-[90vw] h-screen relative -top-12 left-[5vw] sm:left-[8vw]  mx-auto mb-16 pointer-events-none'}>
                        <motion.img
                            layoutId="header"
                            src={`/img/${galleryId}/0.jpg`} alt={''} className={'mx-auto mt-[25%] md:mt-[15%] lg:mt-[8%] w-[100vw] h-[95vh] shadow-lg rounded-lg sm:w-[30vw] sm:h-[45vw] md:w-[85vw] md:h-[95vh] lg:w-[45vw] xl:h-[85vh] object-cover'}
                            data-scroll data-scroll-speed={'1'} />
                        <div className={'absolute w-fit h-10 right-[14vw] bottom-[32vh] xl:right-[19vw] 2xl:right-[22vw] text-right text-sm 2xl:text-xl'}>
                            <div data-scroll data-scroll-speed={'4'}> {CAPTIONS[galleryId]?.title}</div>
                            <div data-scroll data-scroll-speed={'4'} className={'w-[55vw] sm:w-[15vw] h-fit flex flex-wrap whitespace-normal py-4 text-current/60'}>
                                {CAPTIONS[galleryId]?.desc}
                            </div>
                        </div>
                    </div>
                    {/* images */}
                    <div data-scroll-section className={'w-[55vw] md:w-[45vw] lg:w-[30vw] xl:w-[25vw] relative pointer-events-none'}>
                        <img data-scroll data-scroll-speed={'1.5'}
                             src={`/img/${galleryId}/1.jpg`}
                             alt={''}
                             className={'rounded-lg shadow-lg absolute top-[5vh] left-[10%] object-cover w-full h-[65vw] lg:w-[20vw] xl:w-full md:h-[60vw] lg:h-[45w] xl:h-[35vw] -z-50'}
                        />
                    </div>
                    <div data-scroll-section className={'w-[70vw] sm:w-[50vw] z-30 relative pointer-events-none'}>
                        <img data-scroll data-scroll-speed={'6'}
                             src={`/img/${galleryId}/2.jpg`}
                             alt={''}
                             className={'rounded-lg shadow-lg absolute bottom-[15vh] left-0 object-cover w-full md:w-[80vw] h-[100vw] md:h-[70vw] lg:w-[30vw] lg:h-[40vw] '}
                        />
                    </div>
                    <div data-scroll-section className={'w-[55vw] md:w-[45vw] lg:w-[30vw] xl:w-[25vw] relative pointer-events-none'}>
                        <img data-scroll data-scroll-speed={'1.5'}
                             src={`/img/${galleryId}/3.jpg`}
                             alt={''}
                             className={'rounded-lg shadow-lg absolute top-[5vh] left-[10%] object-cover w-full h-[65vw] lg:w-[20vw] xl:w-full md:h-[60vw] lg:h-[45w] xl:h-[35vw] -z-50'}
                        />
                    </div>
                    <div data-scroll-section className={'w-[70vw] sm:w-[50vw] z-30 relative pointer-events-none'}>
                        <img data-scroll data-scroll-speed={'6'}
                             src={`/img/${galleryId}/4.jpg`}
                             alt={''}
                             className={'rounded-lg shadow-lg absolute bottom-[15vh] left-0 object-cover w-full md:w-[80vw] h-[100vw] md:h-[70vw] lg:w-[30vw] lg:h-[40vw] '}
                        />
                    </div>
                    <div data-scroll-section className={'w-[55vw] md:w-[45vw] lg:w-[30vw] xl:w-[25vw] relative pointer-events-none'}>
                        <img data-scroll data-scroll-speed={'1.5'}
                             src={`/img/${galleryId}/5.jpg`}
                             alt={''}
                             className={'rounded-lg shadow-lg absolute top-[5vh] left-[10%] object-cover w-full h-[65vw] lg:w-[20vw] xl:w-full md:h-[60vw] lg:h-[45w] xl:h-[35vw] -z-50'}
                        />
                    </div>
                    <div data-scroll-section className={'w-[70vw] sm:w-[50vw] z-30 relative pointer-events-none'}>
                        <img data-scroll data-scroll-speed={'6'}
                             src={`/img/${galleryId}/6.jpg`}
                             alt={''}
                             className={'rounded-lg shadow-lg absolute bottom-[15vh] left-0 object-cover w-full md:w-[80vw] h-[100vw] md:h-[70vw] lg:w-[30vw] lg:h-[40vw] '}
                        />
                    </div>
                </main>
            </LocomotiveScrollProvider>
            <div className={'absolute top-[8vh] font-medium sm:w-[30vw] w-[80vw] sm:left-[%] pl-2 sm:pl-4 2xl:w-[25vw] 2xl:text-3xl whitespace-normal '}>
                <Link href={'/'} className={'absolute left-[10vw]'}>
                    <MagneticButton> <ArrowLeftIcon className={'w-10 h-10 text-black'}/> </MagneticButton>
                </Link>
            </div>
        </>
    )
}