import { Field } from "@/components/ui/field/field";
import { SearchIcon } from "../icons/search";
import { Button } from "../ui/button/button";
import { AdminIcon } from "../icons/admin";
import { UserIcon } from "../icons/user";
import { CartIcon } from "../icons/cart";
import Link from "next/link";

export const Header = () => {
	return (
		<>
			<div className='flex justify-between px-12 py-4 bg-white items-center w-full gap-12'>
				<div className='flex items-center gap-12 w-1/2'>
					<a href='/'>
						<img
							src='./logo-header.png'
							alt=''
							className='h-16 bg-fixed object-contain'
						/>
					</a>
					<div className='flex items-center w-full'>
						<Field icon={<SearchIcon />} placeholder='Поиск товаров' />
					</div>
				</div>
				<div className='flex items-center justify-between gap-2 w-1/2'>
					<div className='flex flex-col items-end leading-none'>
						<a href='tel:88006661311' className='text-black font-bold'>
							8 800 666 13-11
						</a>
						<p className='text-d-gray-300 text-xs'>Поддержка 24/7</p>
					</div>
					<div className='flex gap-7 items-center'>
						<Link href='/admin'>
							<Button variant='icon'>
								<AdminIcon className='h-7 w-7 text-d-gray-700 hover:text-d-gray-500 transition-all' />
							</Button>
						</Link>
						<Link href='/profile'>
							<Button variant='icon'>
								<UserIcon className='h-7 w-7 text-d-gray-700 hover:text-d-gray-500 transition-all' />
							</Button>
						</Link>

						<Link href='/cart' className='flex items-center gap-3 hover:bg-d-gray-100 p-1 rounded-lg'>
							<Button variant='icon'>
								<CartIcon className='h-7 w-7 text-d-gray-700 hover:text-d-gray-500 transition-all' />
							</Button>
							<div className='flex flex-col leading-none'>
								<p className='text-d-gray-300 text-xs'>Ваша корзина</p>
								<p className='text-black font-bold'>₽20000.00</p>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};
