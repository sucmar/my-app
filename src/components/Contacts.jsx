import { Link } from "react-router-dom";
import { Button } from "../styled-components/style";
const Contact = () => {
    return (
      <div>
          <p>CONTACTS SCREEN</p>
          <Link to={"/"}>Volver a la pagina principal </Link>
          <Button variant="outlined">my button</Button>
      </div>
    );
  }
  
  export default Contact;
  