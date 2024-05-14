"use client";

import { useState } from "react";
import { Button } from "./ui/button/button";

interface CardProps {
	img?: string;
	label: string;
	unit: string;
	inStock: string;
	price: number;
}

export const Card = ({ img, label, unit, inStock, price }: CardProps) => {
	const [count, setCount] = useState<number>(0);
	return (
		<>
			<div className='flex flex-col items-start rounded-lg border p-4 gap-2'>
				<img src={img} className='m-4' />
				<div className='flex flex-col gap-2'>
					<h3 className='text-xl text-black font-bold'>{label}</h3>
					<div className='flex gap-1'>
						<span className='text-d-gray-400 font-semibold'>{unit}</span> |{" "}
						<span className='text-d-gray-200 font-semibold'>{inStock}</span>
					</div>
					<h4 className='text-2xl text-green-600 font-bold'>
						{new Intl.NumberFormat("ru-RU", {
							style: "currency",
							currency: "RUB",
						}).format(price)}
					</h4>
				</div>
				<div className='grid grid-cols-2 gap-2 w-full'>
					<div className='flex justify-around rounded-lg border px-2 -py-0.5'>
						<button
							className='text-d-gray-200 font-semibold text-lg'
							onClick={() => count >= 1 && setCount(count - 1)}
						>
							-
						</button>
						<input
							type='text'
							className='w-12 text-center outline-none'
							value={count}
							onChange={e => setCount(+e.target.value)}
						/>
						<button
							className='text-d-gray-200 font-semibold text-lg'
							onClick={() => setCount(count + 1)}
						>
							+
						</button>
					</div>
					<Button>Добавить</Button>
				</div>
			</div>
		</>
	);
};
