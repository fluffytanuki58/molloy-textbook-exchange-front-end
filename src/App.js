import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TextbookInfo from "./pages/TextbookInfo";
import Main from "./pages/Main";
import Header from "./components/Header";
// import Foo from "./Foo";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route exact path="/book/1" element={<TextbookInfo />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}