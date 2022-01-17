import Head from 'next/head';
import Nav from '../components/nav';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Demo App</title>
			</Head>

			<Nav />
			Hello! Welcome to my Demo App.
		</div>
	)
}
