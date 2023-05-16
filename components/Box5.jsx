export default function Box5() {
	return (
		<>
			<section className='p-[5rem]'>
				<h1 className='mb-2'>useAnimation</h1>

				<div className='box-container pb-[5rem] grid'>
					<div className='flex gap-2 items-center [&>*]:bg-cyan-500 [&>*]:text-white [&>*]:px-5 [&>*]:py-2 [&>*]:rounded-md mb-4 [&>*]:font-semibold'>
						<button className='hover:bg-cyan-700 transition-all'>
							Move Left
						</button>
						<button className='hover:bg-cyan-700 transition-all'>
							Move Right
						</button>
						<button className='hover:bg-cyan-700 transition-all'>Circle</button>
						<button className='hover:bg-cyan-700 transition-all'>Square</button>
						<button className='hover:bg-cyan-700 transition-all'>Stop</button>
					</div>

					<div className='box w-[20rem] h-[20rem] bg-[aquamarine] grid place-items-center'></div>
				</div>
			</section>
		</>
	)
}
