import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Box1() {
	const [isAnimating, setIsAnimating] = useState(false)

	return (
		<>
			<section className='p-[5rem]'>
				<h1 className='mb-2'>Initial, Animate, and Transition prop</h1>
				<div className='box-container pb-[5rem] grid'>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{
							x: isAnimating ? 800 : 0,
							opacity: isAnimating ? 1 : 0.5,
							rotate: isAnimating ? 360 : 0,
						}}
						transition={{
							type: 'spring',
							stiffness: 200,
							damping: 20,

							//! duration not work on type "spring", it works on 'tween' type
							// duration: 1.5,
						}}
						onClick={() => setIsAnimating(!isAnimating)}
						className='box w-[20rem] h-[20rem] bg-[aquamarine] grid place-items-center'
					></motion.div>
				</div>
			</section>
		</>
	)
}
