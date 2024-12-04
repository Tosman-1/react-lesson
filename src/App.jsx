// import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./navbar";
import Home from "./Home";
import Newpage from "./newpage";
import BlogDet from "./BlogDet";

function App() {
  return (
    <Router>
      <>
        <div>
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/newpage" element={<Newpage />} />
              <Route path="/BlogDet/:id" element={<BlogDet />} />
            </Routes>
          </div>
        </div>
      </>
    </Router>
  );
}

export default App;
