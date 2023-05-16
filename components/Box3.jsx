import { motion } from 'framer-motion'

export default function Box3() {
	return (
		<section className='p-[5rem]'>
			<h1 className='mb-2'>Variants</h1>

			<div className='box-container pb-[5rem] grid'>
				<div className='box w-[20rem] h-[20rem] bg-[aquamarine] grid place-items-center'></div>
			</div>
		</section>
	)
}
