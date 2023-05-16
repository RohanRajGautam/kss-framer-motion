import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html>
			<Head>
				{/* eslint-disable-next-line @next/next/no-title-in-document-head */}
				<title>KSS - Framer motion</title>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
