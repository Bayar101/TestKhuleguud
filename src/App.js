import React from "react";
import Investors from "./container/investors";
import Video from "./container/video";

function App() {
  return (
    <div className="w-full h-auto overflow-hidden">
      <Video />
      <Investors />
    </div>
  );
}

export default App;
