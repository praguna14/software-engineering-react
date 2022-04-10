import React from "react";
import './styles.css';
// import Navigation from "./components/navigation";
// import Tuits from "./components/tuits";
// import WhatsHappening from "./components/whats-happening/whats-happening";
// import Bookmarks from "./components/bookmarks/bookmarks";
import Tuiter from "./components/tuiter";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
    <Tuiter/>
    </HashRouter>
  );
}

export default App;
