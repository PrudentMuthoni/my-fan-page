"use client";

import { useState } from "react";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button onClick={() => setLiked(!liked)} style={{width: "150px", height:"32px" , borderRadius:"10px",backgroundColor: " #420D09", color:"White", fontSize: "15px"}}>
      {liked ? "❤️ Liked" : "🤍 Like"} 
    </button>
  );
}