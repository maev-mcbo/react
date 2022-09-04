import { useState } from "react";
import "./App.css";
import AddTask from "./Components/AddTask";
import Credits from "./Components/credits";
import Menu from "./Components/Menu";
import Profile from "./Components/Profile";
import Services from "./Components/Services";
import Settings from "./Components/Settings";
import WindowHandlersButtons from "./Components/WindowHandlersButtons";

function App() {
  return (
    <>
      <div className="container mx-auto px-4 ">
        <div className="mx-auto w-1/4 border px-4 py-4 backdrop-blur-sm rounded-3xl my-9 bg-white/[0.8]">
          <WindowHandlersButtons />
          <Profile />
          <hr />
          <Menu />
          <hr />
          <Services />
          <Settings />
          <AddTask />
        </div>
        <Credits />
      </div>
      {/* <div className="container  mx-auto w-1/4 border px-4 py-4 backdrop-blur-sm rounded-3xl my-9 bg-white/[0.8]">
      <WindowHandlersButtons />
      <Profile />
      <hr />
      <Menu />
      <hr />
      <Services />
      <Settings />
      <AddTask />
    </div> */}
    </>
  );
}

export default App;
