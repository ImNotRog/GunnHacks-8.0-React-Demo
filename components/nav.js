import Link from 'next/link';
import styles from '../styles/nav.module.css';

export default function Nav() {
    return <div className={styles.nav}>
        <Link href="/"><div>Home</div></Link>
        <Link href="/counter"><div>Counter</div></Link>
        <Link href="/todo"><div>Todo</div></Link>
        <a href="https://www.gunnhacks.com/"><img src={"/lambdacool.png"} width={30} height={30} /></a>
    </div>
}
