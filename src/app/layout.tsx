import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang='ru'>
			<body className={`${inter.className} bg-white`}>
				<Header />
				<div className='min-h-screen bg-white text-black '>{children}</div>
				<Footer />
			</body>
		</html>
	);
};

export default RootLayout;
