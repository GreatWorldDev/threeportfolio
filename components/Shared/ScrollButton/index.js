import React from 'react';
import styles from './scrollbutton.module.scss'
import Image from 'next/image';

export default function ScrollButton () {
  return(
    <section id="section03" className={styles.scrollbutton}>
      <a href="">
        <Image
          src="/Assets/scrollup2.png"
          alt=""
          width={47}
          height={38}
        />
        <Image
          src="/Assets/scrollup1.png"
          alt=""
          width={80}
          height={31}
        />
      </a>
    </section>
  )
}