import { Field } from "./ui/field/field";
import { NumField } from "./ui/field/num-field";

interface CategoryItem {
	name: string;
	count: number;
}

interface FilterProps {
	categories?: CategoryItem[];
	minPrice: number;
	maxPrice: number;
}

export const Filter = ({
	categories = [{ name: "Все категории", count: 500 }],
	minPrice,
	maxPrice,
}: FilterProps) => {
	return (
		<>
			<div className='flex flex-col gap-3'>
				<h4 className='font-bold text-sm uppercase'>Подкатегории</h4>
				<div className='flex flex-col'>
					{categories && (
						<ul>
							{categories.map(category => (
								<li
									key={category.name}
									className='flex items-center justify-between p-3 rounded-lg bg-d-gray-100 text-sm'
								>
									<span>{category.name}</span>
									<span className="text-d-gray-300">{category.count}</span>
								</li>
							))}
						</ul>
					)}
				</div>
				<h4 className='font-bold text-sm uppercase'>Цена</h4>
				<div className='flex items-center justify-around w-full'>
					<span>от</span>
					<NumField placeholder={minPrice.toString()} staticSymbol='₽' />
					<span>до</span>
					<NumField placeholder={maxPrice.toString()} staticSymbol='₽' />
				</div>
			</div>
		</>
	);
};
