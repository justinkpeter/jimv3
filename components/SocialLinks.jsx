import Link from "next/link";

export function SocialLinks() {

	const LINKS = {
		github: 'https://github.com/justinkpeter/jimv3',
		instagram: 'https://www.instagram.com/justincrediblemoments',
		twitter: 'https://twitter.com/_justinpeter'
	}
	return (
		<>
			<div className={'fixed bottom-[3vh] sm:bottom-[10vh] md:bottom-[2vh] right-[5vw] sm:right-[2vw] z-50 flex gap-4 text-xs sm:text-[2vw] xl:text-sm 2xl:text-lg uppercase  mix-blend-difference'}>
				<Link className={'underline hover:italic hover:text-white/70'} href={LINKS.github} target="_blank" rel="noopener noreferrer"> github</Link>
				<Link className={'underline hover:italic hover:text-white/70'} href={LINKS.instagram} target="_blank" rel="noopener noreferrer"> instagram </Link>
				<Link className={'underline hover:italic hover:text-white/70'} href={LINKS.twitter} target="_blank" rel="noopener noreferrer"> twitter</Link>
			</div>
		</>
	)
}