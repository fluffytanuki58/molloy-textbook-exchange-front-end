import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <h1>Textbook Information</h1>
      <p>
        textbook placeholder
      </p>
      <Link to="../Menu">Go To My Menu<br></br></Link>
      <Link to="../">Go Back Home</Link>
    </>
  );
}
