import { motion } from 'framer-motion'

export default function Box4() {
	return (
		<>
			<section className='p-[5rem]'>
				<h1 className='mb-2'>Keyframes</h1>

				<div className='box-container pb-[5rem] grid'>
					<motion.div
						animate={{
							scale: [1, 1.4, 1.4, 1, 1],
							borderRadius: ['20%', '20%', '50%', '50%', '20%'],
							rotate: [0, 0, 270, 270, 0],
						}}
						transition={{
							duration: 2,
						}}
						className='box w-[20rem] h-[20rem] bg-[aquamarine] grid place-items-center'
					></motion.div>
				</div>
			</section>
		</>
	)
}
