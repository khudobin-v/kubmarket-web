interface BannerProps {
	img?: any;
	children?: React.ReactNode;
}

export const Banner = ({ img, children }: BannerProps) => {
	return (
		<>
			<div className='absolute left-10 right-10 top-10 bottom-10 bg-white rounded-xl flex items-center'>
				<div className="w-1/2 px-12">{children}</div>
				<div className='realtive w-1/2 pr-4 h-full flex'>{img}</div>
			</div>
		</>
	);
};
