import { useEffect, useState } from "react";
import Head from "next/head";
import styles from '../styles/todo.module.css';
import Nav from "../components/nav";

export default function Todo () {

    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');

    useEffect(() => {
        try {
            const todos = JSON.parse(localStorage.getItem('todos'));
            if(todos != null) setTodos(todos);
        } catch(err) {}
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addItem = () => {
        if(text === '') return;

        setTodos([...todos, text]);
        setText('');
    }

    const deleteItem = (i) => {
        setTodos(todos.filter((_,j) => j !== i));
    }

    return <div>
        
        <Nav />

        <div className={styles.main}>

            <Head>
                <title>Todo</title>
            </Head>

            <div className={styles.list}>
                {todos.map((a,i) => 
                    <div key={i} className={styles.item}>
                        <div className={styles.checkbox} onClick={() => deleteItem(i)}></div>
                        {a}
                    </div>
                )}

                {todos.length === 0 
                ? <div>You have no tasks to do!</div> 
                : null}
            </div>

            <div className={styles.footer}>
                <input 
                    value={text}
                    onChange={(e) => setText(e.target.value)} 
                    onKeyPress={(e) => e.key === 'Enter' ? addItem() : null} 
                    className={styles.input} />
            </div>
        </div>

    </div>

}
