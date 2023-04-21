import CanvasImageComponent from "react-canvas-image";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>react-canvas-image</h1>
      <article>
        <h2>Example image</h2>

        <div className="robot-sprites-container">
          <CanvasImageComponent src="images/idle_sprite_1.png" center />
        </div>
      </article>
    </div>
  );
}

export default App;
