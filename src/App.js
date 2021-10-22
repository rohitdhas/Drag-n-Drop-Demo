import "./styles.css";
import { useEffect } from "react";
import { initDragAndDrop } from "./script";

export default function App() {
  useEffect(() => {
    initDragAndDrop();
  }, []);

  return (
    <>
      <div id="alt">Doesn't support on small devices!</div>
      <div className="App" id="container">
        <h2>Drag and Drop List</h2>
        <p className="draggable" draggable="true">
          1<i className="material-icons">drag_handle</i>
        </p>
        <p className="draggable" draggable="true">
          2<i className="material-icons">drag_handle</i>
        </p>
        <p className="draggable" draggable="true">
          3<i className="material-icons">drag_handle</i>
        </p>
        <p className="draggable" draggable="true">
          4<i className="material-icons">drag_handle</i>
        </p>
        <p className="draggable" draggable="true">
          5<i className="material-icons">drag_handle</i>
        </p>
        <p className="draggable" draggable="true">
          6<i className="material-icons">drag_handle</i>
        </p>
        <footer>
          Made by{" "}
          <a
            href="https://www.linkedin.com/in/rohit-dhas-26b68215a/"
            target="_blank"
            rel="noreferrer"
          >
            Rohit Dhas
          </a>
        </footer>
      </div>
    </>
  );
}
