import { stat } from "fs";

interface NumFieldProps {
	placeholder: string;
	staticSymbol?: string;
}

export const NumField = ({ placeholder, staticSymbol }: NumFieldProps) => {
	return (
		<>
			<label htmlFor='numField' className='relative'>
				{staticSymbol && (
					<span className='absolute left-2 top-1/2 -translate-y-[50%]'>
						{staticSymbol}
					</span>
				)}
				<input
					className={`border rounded-lg p-2 text-sm w-20 ${staticSymbol &&  " pl-6"}`}
					placeholder={placeholder}
				/>
			</label>
		</>
	);
};
