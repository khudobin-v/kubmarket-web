interface ButtonProps {
	children: React.ReactNode;
	variant?: "default" | "link" | "icon";
}

export const Button = ({ children, variant = "default" }: ButtonProps) => {
	return (
		<>
			{variant === "default" ? (
				<div className='flex items-center justify-center bg-d-red-400 p-3 rounded-lg cursor-pointer hover:bg-d-red-500 transition-colors text-white'>
					<button className='font-bold text-sm'>{children}</button>
				</div>
			) : variant === "link" ? (
				<div className='text-d-gray-300 underline font-medium underline-offset-2 text-sm cursor-pointer hover:decoration-dotted transition-all w-min'>
					{children}
				</div>
			) : (
				<div className='text-black cursor-pointer h-10 w-10 flex items-center justify-center rounded-lg hover:bg-d-gray-100 transition-all'>{children}</div>
			)}
		</>
	);
};
