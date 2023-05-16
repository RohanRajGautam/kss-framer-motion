import { motion } from 'framer-motion'

export default function Box3() {
	const boxVariant = {
		hidden: {
			x: '-100vw',
		},
		visible: {
			x: 0,
			transition: {
				type: 'spring',
				stiffness: 300,
				damping: 20,
				when: 'beforeChildren',
				staggerChildren: 0.3,
			},
		},
	}

	const listVariant = {
		hidden: {
			x: -10,
			opacity: 0,
		},
		visible: {
			x: 0,
			opacity: 1,
		},
	}

	return (
		<section className='p-[5rem]'>
			<h1 className='mb-2'>Variants</h1>

			<div className='box-container pb-[5rem] grid'>
				<motion.div
					variants={boxVariant}
					initial='hidden'
					animate='visible'
					className='box w-[20rem] h-[20rem] bg-[aquamarine] grid place-items-center'
				>
					{[1, 2, 3].map((box) => {
						return (
							<motion.li
								key={box}
								variants={listVariant}
								className='box-item w-[.5rem] h-[.5rem] bg-white p-[2rem] m-[.5rem] list-none'
							></motion.li>
						)
					})}
				</motion.div>
			</div>
		</section>
	)
}
