import React from "react";
import { HomePage, WorkSpace } from "./Pages";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="workspace" element={<WorkSpace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
