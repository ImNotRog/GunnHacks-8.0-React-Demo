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
					<div className={styles.subtitle}><a href="https://www.gunnhacks.com/"><span className={styles.gunn}>Gunn</span>Hacks 8.0</a></div>
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
						<li><a href="https://github.com/ImNotRog/GunnHacks-8.0-React-Demo" target="_blank" rel="noopener noreferrer">
							Github Repository
						</a></li>
						<li><a href="https://www.figma.com/file/2imkRBoOLdso3LcK5LxU7U/GunnHacks-8.0-React-Workshop?node-id=0%3A1" target="_blank" rel="noopener noreferrer">Figma</a></li>
					</ul>

					<p>
						<span className={styles.em + ' ' + styles.gunn}>Before the workshop</span>, 
						please get set up! Refer to the first link above for instructions.
					</p>
					<p>
						Additionally, if you are new to web development, we highly suggest you look over our short blurb on 
						HTML, CSS, and JS before attending the workshop.
					</p>
					<p>
						Feel free to take a look around this website and its code! 
						Excepting this landing page, we&apos;ll be creating the following pages, 
						which are also located in the nav bar:
					</p>

					<ul>
						<li><Link href="/counter"><a>Introductory Counter</a></Link></li>
						<li><Link href="/todo"><a>To-Do List</a></Link></li>
					</ul>

					<p>
						We realize that we would never cover the full scope of React within an hour. 
						Provided below are excellent resources to further your journey in web development!
					</p>

					<ul>
						<li><a href="https://vercel.com/docs">Next JS Documentation</a></li>
						<li>Backend Resources 
							<ul>
								<li><a href="https://vercel.com/docs/concepts/solutions/databases">Options for Databases with Next JS</a></li>
								<li><a href="https://vercel.com/docs/concepts/solutions/realtime">Options for Realtime Apps, like Chat or Games</a>
									<ul>
										<li><a href="https://vercel.com/integrations/supabase">Supabase is an excellent option for the above two points</a></li>
									</ul>
								</li>
							</ul>
						</li>

						<li>CSS Resources
							<ul>
								<li><a href="https://css-tricks.com/guides/">CSS Tricks - a fantastic website for CSS solutions</a></li>
								<li><a href="https://cssreference.io/">CSS Reference</a></li>
							</ul>
						</li>


						<li>Google. When in doubt, Google is your friend.</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
