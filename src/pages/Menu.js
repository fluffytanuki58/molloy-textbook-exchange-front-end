import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <h1>Menu</h1>
      <p>
        This is the menu page.
      </p>
      <Link to="../TextbookInfo">Go To Textbook Info<br></br></Link>
      <Link to="../">Go Back Home</Link>
    </>
  );
}
