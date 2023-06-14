'use client'

import React, {useEffect, useState} from "react"
import { motion, AnimatePresence } from "framer-motion"
import { wrap } from "@popmotion/popcorn"
import { IMAGES } from "./images"
import { useRecoilState } from "recoil";
import { galleryState } from "@/atoms/selectedGallery";

const sliderVariants = {
	incoming: direction => ({
		x: direction > 0 ? "100%" : "-100%",
		scale: 1.2,
		opacity: 0
	}),
	active: { x: 0, scale: 1, opacity: 1 },
	exit: direction => ({
		x: direction > 0 ? "-100%" : "100%",
		scale: 1,
		opacity: 0.2
	})
}

const sliderTransition = {
	duration: 1,
	ease: [0.56, 0.03, 0.12, 1.04]
}

export const ImageCarousel = () => {
	const [[imageCount, direction], setImageCount] = useState([0, 0])
	const [gallery, setGallery] = useRecoilState(galleryState)
	const [carouselIndex, setCarouselIndex] = useState(null)

	const activeImageIndex = wrap(0, IMAGES.length, imageCount)

	const swipeToImage = swipeDirection => {
		setImageCount([imageCount + swipeDirection, swipeDirection])
	}

	const dragEndHandler = dragInfo => {
		const draggedDistance = dragInfo.offset.x
		const swipeThreshold = 50
		if (draggedDistance > swipeThreshold) {
			swipeToImage(-1)
		} else if (draggedDistance < -swipeThreshold) {
			swipeToImage(1)
		}
	}

	const skipToImage = imageId => {
		//update selected gallery
		setGallery(imageId)
		// update local storage
		updateSelectedGallery(imageId)

		let changeDirection
		if (imageId > activeImageIndex) {
			changeDirection = 1
		} else if (imageId < activeImageIndex) {
			changeDirection = -1
		}
		setImageCount([imageId, changeDirection])
	}

	const updateSelectedGallery = (imageId) => {
		// check local storage for selected gallery
		const selectedGallery = localStorage.getItem('selectedGallery')
		// if selected gallery is not in local storage, add it
		if(!selectedGallery) {
			localStorage.setItem('selectedGallery', imageId)
		}
		// if selected gallery is in local storage, update it
		else {
			localStorage.setItem('selectedGallery', imageId)
		}
	}

	useEffect(() => {
		// check local storage for selected gallery
		const selectedGallery = parseInt(localStorage.getItem('selectedGallery'))

		// if selected gallery is in local storage, set carousel index to selected gallery
		if(selectedGallery) {
			setCarouselIndex(selectedGallery)
		}
		else{
			setCarouselIndex(0)
		}
	}, [activeImageIndex])

	return (
		<main>
			<div className="slider-container">
				<div className="slider">
					<AnimatePresence initial={false} custom={direction}>
						<motion.div
							layoutId="header"
							key={imageCount}
							style={{
								backgroundImage: `url(${IMAGES[carouselIndex !== null ? carouselIndex : activeImageIndex].imageSrc})`
								// backgroundImage: `url(${IMAGES[activeImageIndex].imageSrc})`
							}}
							custom={direction}
							variants={sliderVariants}
							initial="incoming"
							animate="active"
							exit="exit"
							transition={sliderTransition}
							drag="x"
							dragConstraints={{ left: 0, right: 0 }}
							dragElastic={1}
							onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
							className="image"
						/>
					</AnimatePresence>
				</div>
				{/*<div className="buttons">*/}
				{/*	<button onClick={() => swipeToImage(-1)}>PREV</button>*/}
				{/*	<button onClick={() => swipeToImage(1)}>NEXT</button>*/}
				{/*</div>*/}
			</div>

			<div className="thumbnails">
				{IMAGES.map(image => (
					<div
						key={image.id}
						onClick={() => skipToImage(image.id)}
						className="thumbnail-container"
					>
						<img src={image.imageSrc} alt="gallery" />
						<div
							className={`active-indicator ${
								image.id === activeImageIndex ? "active" : null
							}`}
						/>
					</div>
				))}
			</div>
		</main>
	)
}
