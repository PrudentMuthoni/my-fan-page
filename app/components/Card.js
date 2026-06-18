import Image from "next/image";
import styles from "./Card.module.css";
import LikeButton from "./LikeButton";

export default function Card({ name, blurb, rating, image}) {
  return (
     <article className={styles.card}>
      {image ? (
        <Image src={image} alt={name} width={240} height={300}  />
      ) : (
        <div className={styles.image}>{image}</div>
      )}
      <h2>{name}</h2>
      <p>{blurb}</p>
      <p className={styles.stars}>{"⭐".repeat(rating)}</p>
      <LikeButton/>
    </article>
  );
}