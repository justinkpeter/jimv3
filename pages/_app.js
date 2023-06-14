'use client'

import { RecoilRoot } from "recoil";
import { LayoutGroup } from "framer-motion";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import '@/styles/globals.css'
import 'styles/imageCarousel.scss'
import 'styles/magneticButton.css'
import {useEffect, useRef} from "react";
import {Sidebar} from "@/components/Sidebar";
import {SocialLinks} from "@/components/SocialLinks";
import {useRouter} from "next/router";

export default function App({ Component, pageProps }) {

    const { asPath } = useRouter() // With next/router


    const options = {
        smooth: true,
        direction: 'vertical',
        smartphone: {
            breakpoint: 0,
            smooth: true,
        },
        tablet: {
            breakpoint: 0,
            smooth: true,
        },
    }

    const scrollRef = useRef(null);
    const containerRef = useRef(null)

    return (
      <>
          {/*<LocomotiveScrollProvider options={options} watch={[]} containerRef={containerRef} location={asPath}>*/}
              <main className={'font-clash text-white uppercase bg-[#747066] h-screen w-screen overflow-hidden'} data-scroll-container ref={containerRef}>
              {/*<main className={'font-clash text-white uppercase bg-[#747066] select-none'} data-scroll-container >*/}
                  <LayoutGroup>
                      <RecoilRoot>
                          <Component {...pageProps} />
                      </RecoilRoot>
                  </LayoutGroup>
              </main>
          {/*</LocomotiveScrollProvider>*/}
          <SocialLinks/>
          <Sidebar/>


      </>
  )
}
