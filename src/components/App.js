import "bootstrap/dist/css/bootstrap.min.css";
import Greeting from "./Greeting.js";
import Profile from "./Profile.js";
import ToDoList from "./ToDoList.js"






function App() {
  return (
    <div className="container mt-5 mb-5 col-6">
      {/* Não se esqueça de invocar seus componentes aqui! */}
      <small>Interpolação de variáveis</small>
        <Greeting />
      <small>Imagens</small>
      <Profile />
      <hr />
        

      <small>Renderização de listas</small>
      <ToDoList />
      <hr />

      <small>Renderização condicional</small>
      
      <hr />
      
      
    </div>
  );
}

export default App;
