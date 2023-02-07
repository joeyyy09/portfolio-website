import React from "react";
import Typewriter from "typewriter-effect";

export default function TypingEffect() {
  return (
    <div>
      <Typewriter
        options={{
          strings: ["Harshith Mente here."],
          autoStart: true,
          loop: true,
        }}
      
      />
    </div>
  );
}
