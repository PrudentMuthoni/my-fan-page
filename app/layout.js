import "./globals.css";
import Nav from "./components/Nav";

export const metadata = {
  title: "Step into your power.",
  description: "The right pair of heels does more than complete an outfit. It changes your posture, elevates your confidence, and commands the room. Discover handcrafted heels designed to make you feel unstoppable from the ground up.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <footer style={{ marginTop: "3rem", textAlign: "center", color: "#888" }}>
          Built with Next.js 💙 heart
        </footer>
      </body>
    </html>
  );
}
