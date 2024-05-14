import { Banner } from "@/components/banner";
import { Card } from "@/components/card";
import { Filter } from "@/components/filter";
import { Button } from "@/components/ui/button/button";
import { Select } from "@/components/ui/select/select";

const HomePage = () => {
	return (
		<>
			<title>Kubmarket – Главная страница</title>

			{/* Промо-баннер */}
			<div className='relative'>
				<img src='./bg-for-banner.png' alt='' />
				<Banner img={<img src='./banner-img.png' />}>
					<div className='flex justify-between'>
						<div className='flex flex-col w-44 gap-5'>
							<div className='flex flex-col gap-2'>
								<h1 className='text-black text-3xl font-bold uppercase'>
									Помидоры
								</h1>
								<p className='text-sm text-d-gray-300'>
									Настолько вкусные, что обоссаться можно
								</p>
							</div>
							<Button>Купить</Button>
						</div>
						<div>
							<div className='relative'>
								<div className='w-32'>
									<h3 className='text-green-600 text-2xl font-bold'>₽250.00</h3>
									<p className='uppercase text-d-gray-300 text-sm leading-none font-medium'>
										Ограниченное предложение
									</p>
								</div>
								<s className='absolute -top-4 -right-10 text-d-gray-300 font-semibold'>
									₽300.00{" "}
								</s>
							</div>
						</div>
					</div>
				</Banner>
			</div>
			<div className='mx-12 my-4'>
				<div className='flex items-center justify-between w-full'>
					<h6 className='text-2xl first-letter:uppercase'>Витрина магазина</h6>
					<div className='flex items-center gap-2'>
						<span className='font-bold  text-xs'>Сортировка по:</span>
						<Select
							size='small'
							options={["Популярности", "Цене", "Рейтингу", "Алфавиту"]}
						/>
					</div>
				</div>
				<div className='grid grid-cols-5 mt-10'>
					<div className='col-span-1'>
						<Filter minPrice={200} maxPrice={5000} />
					</div>
					<div className='col-span-4 ml-4  bg-white'>
						<div className='grid grid-cols-4 gap-4 bg-white'>
							<Card
								img='/test-card-img.png'
								label='Помидоры'
								unit='1кг'
								inStock='176кг в наличии'
								price={250.0}
							/>
							<Card
								img='/test-card-img.png'
								label='Помидоры'
								unit='1кг'
								inStock='176кг в наличии'
								price={250.0}
							/>
							<Card
								img='/test-card-img.png'
								label='Помидоры'
								unit='1кг'
								inStock='176кг в наличии'
								price={250.0}
							/>
							<Card
								img='/test-card-img.png'
								label='Помидоры'
								unit='1кг'
								inStock='176кг в наличии'
								price={250.0}
							/>
							<Card
								img='/test-card-img.png'
								label='Помидоры'
								unit='1кг'
								inStock='176кг в наличии'
								price={250.0}
							/>
							<Card
								img='/test-card-img.png'
								label='Помидоры'
								unit='1кг'
								inStock='176кг в наличии'
								price={250.0}
							/>
							<Card
								img='/test-card-img.png'
								label='Помидоры'
								unit='1кг'
								inStock='176кг в наличии'
								price={250.0}
							/>
							<Card
								img='/test-card-img.png'
								label='Помидоры'
								unit='1кг'
								inStock='176кг в наличии'
								price={250.0}
							/>
							<Card
								img='/test-card-img.png'
								label='Помидоры'
								unit='1кг'
								inStock='176кг в наличии'
								price={250.0}
							/>
							<Card
								img='/test-card-img.png'
								label='Помидоры'
								unit='1кг'
								inStock='176кг в наличии'
								price={250.0}
							/>
							<Card
								img='/test-card-img.png'
								label='Помидоры'
								unit='1кг'
								inStock='176кг в наличии'
								price={250.0}
							/>
							<Card
								img='/test-card-img.png'
								label='Помидоры'
								unit='1кг'
								inStock='176кг в наличии'
								price={250.0}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomePage;
