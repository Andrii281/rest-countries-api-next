"use client";
import { useReducer } from "react";
import { Providers } from "@/redux/provider";
import { Lato } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const lato = Lato({
	weight: ["400", "700"],
	subsets: ["latin"],
});

const metadata = {
	title: "Rest Countries API - Next.js",
	description: "A country information app built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }: ChildrenProps) {
	const [darkMode, setDarkMode] = useReducer(
		(prevMode: boolean) => !prevMode,
		false,
	);

	return (
		<html lang="en">
			<head>
				<meta name="description" content={metadata.description} />
				<script>
					window.USER_DATA = {
						"id": "374494",
						"email": "yuriy.khoma@reflecto.ai",
						"email_verified": true,
						"first_name": "Yuriy",
						"last_name": "Khoma",
						"full_name": "Yuriy Khoma",
					};
					// For demonstration, let's log the USER_DATA to the console
					console.log(window.USER_DATA);
				</script>
				<title>{metadata.title}</title>
			</head>
			<body className={`${darkMode ? "dark" : "light"} ${lato.className}`}>
				<Header mode={darkMode} onClick={setDarkMode} />
				<Providers>{children}</Providers>
				<Footer />
				<link rel="stylesheet" type="text/css" href="https://reflectoadmin.s3.amazonaws.com/client-widget/develop/index.css" />
				<script type="module" src="https://reflectoadmin.s3.amazonaws.com/client-widget/develop/index.js"></script>
				<script type="text/javascript">
					window.addEventListener('DOMContentLoaded', function() {
						window.ChatAi.init({
							projectId: "125467ec-7b71-4974-a17a-270e802b6bfe"
						});
					});
				</script>
			</body>
		</html>
	);
}
