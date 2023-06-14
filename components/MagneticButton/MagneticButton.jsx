import React, {useEffect} from "react";
import {magneticButtonInit} from "@/components/MagneticButton/index";

export const MagneticButton = ({children}) => {
	useEffect(() => {
		if(typeof window !== 'undefined' && typeof document !== 'undefined') {
			magneticButtonInit()
		}
	},[])
	return (
		<>
			<div className={'flex items-center justify-center relative'}>
				<div className="safe-wrap">
					<div id="magnetic-wrap">
						<div id="magnetic-area" className="magnetic-size"/>
						<div id="magnetic-content">
							<div className="my-burger"> {children}</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}