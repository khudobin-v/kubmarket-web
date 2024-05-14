import { SearchIcon } from "@/components/icons/search";
import { Button } from "@/components/ui/button/button";
import { Field } from "@/components/ui/field/field";
import { Select } from "@/components/ui/select/select";

const TestPage = () => {
	return (
		<div className='bg-white h-screen'>
			<title>Тестовая страница</title>
			<div className='flex flex-row gap-2'>
				<div className='w-1/2 flex items-center'>
					<Field icon={<SearchIcon />} />
				</div>
				<Select
					options={["Первый вариант", "Второй вариант", "Третий вариант"]}
				/>
			</div>
			<Button variant='link'>Кнопка</Button>
			<div className='w-1/5'></div>
		</div>
	);
};

export default TestPage;
