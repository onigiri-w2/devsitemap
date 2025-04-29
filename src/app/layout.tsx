import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "DevSitemap",
	description: "世界中の開発関連サイトを集めたマップ",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body className="min-h-screen bg-bg-main text-text-primary font-sans">
				{children}
			</body>
		</html>
	);
}

