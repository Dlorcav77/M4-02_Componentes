import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/input";

const App = () => {
  
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();

      console.log("click",pass);
  };
  
  return (
    <>
      <div className="container m-3">
        <form onSubmit={handleSubmit}>
          <h1 className="mt-5">Desafio Componentes React</h1>
          <p className="mt-3 ms-3 mb-0">Nombre</p>
          <Input className="ms-3" type="text" placeholder="Ingrese su Nombre" />
          <p className="mt-3 ms-3 mb-0">Contrasena</p>
          <Input className="ms-3" type="password" placeholder="Ingrese una Contrasena" onChange={(e => setPass(e.target.value))}/>
          
          {pass === "252525" && (<Button className="btn btn-success ms-3" type="submit">ingresar</Button>)}
        </form>
      </div>
    </>
  )
  
}

export default App;