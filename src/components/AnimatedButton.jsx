// src/components/AnimatedButton.jsx
import App from "../animations/button/App";

export default function AnimatedButton({text}) {
  console.log('====================================');
  console.log(text);
  console.log('====================================');
  return (
    <div>
      <App text={text}/>
    </div>
  );
}
