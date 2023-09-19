import React from "react";
import "./styles.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Menu from "./pages/Menu";
import TextbookInfo from "./pages/TextbookInfo"
// import Foo from "./Foo";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <h1>Hello StackBlitz!</h1>
              <p>Start editing to see some magic happen :)</p>
              <Link to="Menu">Go To My Menu<br></br></Link>
              <Link to="TextbookInfo">Go To Textbook Info</Link>
            </>
          }
        ></Route>
        <Route exact path="/menu" element={<Menu />}></Route>
        <Route exact path="/textbookinfo" element={<TextbookInfo />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
