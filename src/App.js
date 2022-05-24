// Adding components
import {useState} from 'react';
import Player from "./components/Player";
import Song from "./components/Song";
import data from "./util";
import "./styles/app.scss";

function App() {
  // State
  const [songs, setSongs] = useState(data());
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
