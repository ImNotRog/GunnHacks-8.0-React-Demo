import Head from 'next/head';
import Nav from '../components/nav';
import Link from 'next/link';
import styles from '../styles/index.module.css'

export default function Home() {

	// This is the landing page for the React Workshop
	// This page will *not* be included in the actual workshop
	return (
		<div>
			<Head>
				<title>React Workshop • GunnHacks 8.0</title>
			</Head>

			<Nav />
			<div className={styles.main}>
				<div className={styles.header}>
					<div className={styles.subtitle}><span className={styles.gunn}>Gunn</span>Hacks 8.0</div>
					<div className={styles.title}><span className={styles.react}>React</span> Workshop</div>
				</div>

				<div className={styles.content}>
					<p>Hi! This is the landing page for the GunnHacks 8.0 <span className={styles.react}>React</span> Workshop!</p>

					{/* <h2>Links</h2> */}
					<ul>
						<li className={styles.gunn}>
							<a href="https://gist.github.com/ImNotRog/b832548d492cb1851ee676b9e8f6c1e4" target="_blank" rel="noopener noreferrer">
								Setup Instructions
							</a> (Required <span className={styles.em}>Before</span> Workshop!)
						</li>
						<li className={styles.purple}>Basics of HTML / CSS / JS</li>
						<li>Github Repository</li>
						<li>Figma</li>
					</ul>

					<p>
						<span className={styles.em + ' ' + styles.gunn}>Before the workshop</span>, 
						please get set up! Refer to the first link above for instructions.
					</p>
					<p>
						If you are new to web development, we highly suggest you look over our short blurb on 
						HTML, CSS, and JS before attending the workshop.
					</p>
					<p>
						Finally, feel free to take a look around this website and its code! 
						Excepting this landing page, we&apos;ll be creating the following pages, 
						which are also located in the nav bar:
					</p>

					<ul>
						<li><Link href="/"><a>Introductory Counter</a></Link></li>
						<li><Link href="/todo"><a>To-Do List</a></Link></li>
					</ul>
				</div>
			</div>
		</div>
	)
}
