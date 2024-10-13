// import localFont from "next/font/local";
import "./globals.scss";
import styles from "./page.module.scss";
import Header from "@/components/repeatBlocks/header/Header";
import Footer from "@/components/repeatBlocks/footer/Footer";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body>
				<div className={styles.page}>
					<div className={styles.page_box}>
						<Header />
						{children}
						<Footer />
					</div>
				</div>
			</body>
		</html>
	);
}
