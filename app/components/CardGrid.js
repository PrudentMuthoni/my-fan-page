import Card from "./Card";
import styles from "./Card.module.css";
import Link from "next/link";

export default function CardGrid({ items }) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <Link href={"/faves/" + item.id} key={item.id} style={{textDecoration: "none", color: "inherit"}}>
        <Card
          key={item.id}
          name={item.name}
          blurb={item.blurb}
          rating={item.rating}
          image={item.image}
        />
        </Link>
      ))}
    </div>
  );
}