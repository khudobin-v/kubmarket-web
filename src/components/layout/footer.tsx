export const Footer = () => {
	return (
		<>
			<div className='bg-d-red-800 flex items-center justify-between py-6 px-12'>
				<p className='text-white font-light text-sm w-1/2'>
					{new Date().getFullYear()} © KubMarket — потрясающий интернет-магазин
					всякого барахла. Ваши и наши права не защищены. Работаем только
					самовывозом. На Торговой площадке не применяются технологии. Не
					мошенники. Адрес для направления юридически значимых сообщений
					отсутствует
				</p>
				<div className='flex items-center gap-6'>
					<h5 className='text-white font-bold w-36 text-right'>Загрузите наше приложение</h5>
					<div className='flex items-center gap-4'>
						<div className='flex flex-col gap-3 items-center justify-center'>
							<img src='./android-app-qr.png' className='h-20 w-20' alt='' />
							<span className='font-bold'>Android</span>
						</div>
						<div className='flex flex-col gap-3 items-center justify-center'>
							<img src='./ios-app-qr.png' className='h-20 w-20' alt='' />
							<span className='font-bold'>iOS</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
