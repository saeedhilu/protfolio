// src/components/AnimatedButton.jsx
import App from "../animations/button/App";

export default function AnimatedButton({text}) {
  return (
    <div>
      <App text={text}/>
    </div>
  );
}
