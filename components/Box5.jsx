import { motion, useAnimation } from 'framer-motion'
import { useState } from 'react'

export default function Box5() {
	const control = useAnimation()

	return (
		<>
			<section className='p-[5rem]'>
				<h1 className='mb-2'>useAnimation</h1>

				<div className='box-container pb-[5rem] grid'>
					<div className='flex gap-2 items-center [&>*]:bg-cyan-500 [&>*]:text-white [&>*]:px-5 [&>*]:py-2 [&>*]:rounded-md mb-4 [&>*]:font-semibold'>
						<button
							className='hover:bg-cyan-700 transition-all'
							onClick={() => {
								control.start({
									x: 0,
									transition: {
										duration: 1.5,
									},
								})
							}}
						>
							Move Left
						</button>
						<button
							className='hover:bg-cyan-700 transition-all'
							onClick={() => {
								control.start({
									x: 600,
									transition: {
										duration: 1.5,
									},
								})
							}}
						>
							Move Right
						</button>
						<button
							className='hover:bg-cyan-700 transition-all'
							onClick={() => {
								control.start({
									borderRadius: '50%',
									transition: {
										duration: 1,
									},
								})
							}}
						>
							Circle
						</button>
						<button
							className='hover:bg-cyan-700 transition-all'
							onClick={() => {
								control.start({
									borderRadius: 0,
									transition: {
										duration: 1,
									},
								})
							}}
						>
							Square
						</button>
						<button
							className='hover:bg-cyan-700 transition-all'
							onClick={() => control.stop()}
						>
							Stop
						</button>
					</div>

					<motion.div
						className='box w-[20rem] h-[20rem] bg-[aquamarine] grid place-items-center'
						animate={control}
					></motion.div>
				</div>
			</section>
		</>
	)
}
