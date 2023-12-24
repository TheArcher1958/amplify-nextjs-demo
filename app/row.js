'use client'
import styles from './page.module.css'
import { useState } from 'react';

export default function Row() {
    const boxes = Array.from({ length: 3 }, (_, index) => (
        <Box key={index} state="None" />
    ));
    return (
        <div className={styles.row}>
            {boxes}
        </div>
    )
}

function Box() {
    const [state, setState] = useState("");

    function handleClick() {
        console.log('tapped');
        setState('X');
    }
    return (
            <button className={styles.box} onClick={handleClick}>
                {state}
            </button>
    );
}