'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [sampleCounter, setsampleCounter] = useState(0);
  const [numbers, setNumbers] = useState([0, 0, 0, 0, 0]);
  console.log(numbers);

  const clickHandler = () => {
    setsampleCounter((sampleCounter + 1) % 14); //余り
    console.log(sampleCounter);
    const newNumbers = structuredClone(numbers);
    newNumbers[sampleCounter % 5] += 1;
    setNumbers(newNumbers);
    const calculateTotal = (arr: number[]) => {
      let total = 0;
      for (let i = 0; i < 5; i++) {
        total += arr[i];
      }
      return total;
    };
    const total = calculateTotal(numbers);
    console.log(total);
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.sampleCell}
        style={{ backgroundPosition: `${-30 * sampleCounter}px` }}
      />
      <button onClick={() => clickHandler()}>クリック</button>
    </div>
  );
}
