import Link from "next/link";

export default function Nav() {
  return (
    <div className="navigation">
      <nav style={{ display: "flex", gap: "16px", marginBottom: "1rem", justifySelf:"space-between" }}>
      <Link href="/" style={{textDecoration:"none", color: "white", fontSize:"20px"}} > 🏠Home</Link>
      <Link href="/about" style={{textDecoration:"none", color: "white", fontSize:"20px"}}> About</Link>
    </nav>
    <div>
      <Link href={"/"}></Link>
    </div>
    </div>
    
  );
}