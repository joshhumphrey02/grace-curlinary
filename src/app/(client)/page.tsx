import bgImage from '@/assets/header-image1.jpeg';

export default function Home() {
	return (
		<div className="grid p-4 gap-16 sm:px-20 sm:pt-8 min-h-[50vh] font-sans">
			<div>
				<div className="flex">
					<h1
						style={{ backgroundImage: `url('${bgImage.src}')` }}
						className="text-3xl self-start sm:text-[4rem] font-extrabold leading-[2.5rem] sm:leading-[5rem] flex flex-col gap-1 bg-clip-text text text-transparent">
						<span className="">Satisfy Your</span>
						<span className="ml-4">Taste Budz</span>
					</h1>
				</div>
			</div>
		</div>
	);
}
