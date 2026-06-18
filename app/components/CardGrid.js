import Card from "./Card";
import styles from "./Card.module.css";
import Link from "next/link";

export default function CardGrid({ items }) {
  return (
    <div className={styles.grid}>
      {items.map((items) => (
        <Card
          key={items.id}
          name={items.name}
          blurb={items.blurb}
          rating={items.rating}
          image={items.image}
          
        />
        
        
      ))}
      
  
    </div>
    
  );
  <Link href={"/faves/" + items.id} key={items.id}>
  <Card name={items.name} blurb={items.blurb} rating={items.rating} emoji={items.emoji} />
</Link>
  
}
    