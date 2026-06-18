"use client";

import { useState } from "react";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button onClick={() => setLiked(!liked)} style={{width: "150px", height:"32px" , borderRadius:"10px",backgroundColor: "#8D021F", color:"White"}}>
      {liked ? "❤️ Liked" : "🤍 Like"} 
    </button>
  );
}