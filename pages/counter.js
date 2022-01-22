import Head from "next/head";
import { useState } from "react";
import Nav from "../components/nav";
import styles from "../styles/counter.module.css";

export default function Counter() {

    const [counter, setCounter] = useState(0);
    const [on, setOn] = useState(true);

    return <div>

        <Head>
            <title>Counter Demo</title>
        </Head>

        <Nav />

        <div className={styles.main}>
            <h1>Counter</h1>

            <button 
                onClick={() => setCounter(counter + 1)}
                className={styles.button}
            >
                {counter}
            </button>

            <button
                onClick={() => setOn(!on)}
                className={on ? styles.on : styles.off}
            >
                {on ? 'ON' : 'OFF'}
            </button>
        </div>
    </div>
}