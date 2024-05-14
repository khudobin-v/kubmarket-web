interface FieldProps {
	icon?: any;
	placeholder: string;
}

export const Field = ({ icon, placeholder }: FieldProps) => {
	return (
		<>
			<label
				htmlFor='field'
				className='relative border border-transparent w-full'
			>
				{icon && (
					<span className='h-5 w-5 text-black absolute left-3 top-1/2 -translate-y-[50%]'>
						{icon}
					</span>
				)}
				<input
					type='text'
					id='field'
					className='pl-11 py-3 bg-d-gray-100 rounded-lg placeholder:text-d-gray-400 placeholder:text-sm outline-none text-black text-sm pr-3 w-full'
					placeholder={placeholder}
				/>
			</label>
		</>
	);
};
