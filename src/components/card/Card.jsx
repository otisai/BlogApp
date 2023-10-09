import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <h1>Lorem ipsum dolor sit amet consextetur adipisicing elit.</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eaque 
          dignissimos ullam commodi eos asipisci facere! Quis id explicabo ipsam
          totam libero ipsa aliquam obcaecati, in facere molestiae architecto
          asperiores?...
        </p>
        <Link href="/" className={styles.link}>Read More</Link>
      </div>
    </div>
  );
}

export default Card;
