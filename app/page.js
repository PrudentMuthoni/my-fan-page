// import Image from "next/image";
// import styles from "./global.css";
import { items } from "./data";
import Hero from "./components/Hero";
import CardGrid from "./components/CardGrid";

export default function Home() {
  return (
    <main>
      <Hero
      title= "Step into your power."
      tagline=" The right pair of heels does more than complete an outfit. It changes your posture, elevates your confidence, and commands the room. Discover handcrafted heels designed to make you feel unstoppable from the ground up."
      />
       <CardGrid items={items} />
      
    </main>
  );
}




