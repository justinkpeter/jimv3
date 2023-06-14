'use client'

import { RecoilRoot } from "recoil";
import { LayoutGroup } from "framer-motion";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import '@/styles/globals.css'
import 'styles/imageCarousel.scss'
import 'styles/magneticButton.css'
import { useRef} from "react";
import {Sidebar} from "@/components/Sidebar";
import {SocialLinks} from "@/components/SocialLinks";

export default function App({ Component, pageProps }) {

    const containerRef = useRef(null)

    return (
      <>
          <main className={'font-clash text-white uppercase bg-[#747066] h-screen w-screen overflow-hidden'}
                data-scroll-container ref={containerRef}>
              <LayoutGroup>
                  <RecoilRoot>
                      <Component {...pageProps} />
                  </RecoilRoot>
              </LayoutGroup>
          </main>
          <SocialLinks/>
          <Sidebar/>
      </>
  )
}
